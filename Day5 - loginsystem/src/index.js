const express = require("express");
const path = require("path");
const hbs = require("hbs");
const User = require("./mongodb");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// View setup
const templatePath = path.join(__dirname, "../templates");
app.set("view engine", "hbs");
app.set("views", templatePath);

// Routes
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    try {
        const { name, password } = req.body;

        const existingUser = await User.findOne({ name });
        if (existingUser) {
            return res.send("User already exists");
        }

        const newUser = new User({ name, password });
        await newUser.save();
        res.render("home");
    } catch (err) {
        console.error("Signup error:", err);
        res.send("Error during signup");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { name, password } = req.body;

        const user = await User.findOne({ name });
        if (user && user.password === password) {
            res.render("home");
        } else {
            res.send("Invalid credentials");
        }
    } catch (err) {
        console.error("Login error:", err);
        res.send("Error during login");
    }
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
