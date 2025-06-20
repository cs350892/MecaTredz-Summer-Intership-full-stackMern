import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// Mock token generator function (replace with real JWT logic later)
const generateToken = (userId, res) => {
  // TODO: Replace this with real JWT logic
  console.log("✅ Token would be generated here for:", userId);
};

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long." });
    }

    // ✅ Correct way to find user by email
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ message: "Email already exists." });

    // ✅ Hash the actual password (not bcrypt itself!)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    generateToken(newUser._id, res); // Add real token logic here

    res.status(201).json({
      _id: newUser._id,
      email: newUser.email,
      fullName: newUser.fullName,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Error in signup controller:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const login = (req, res) => {
  res.send("login");
};

export const logout = (req, res) => {
  res.send("logout");
};
