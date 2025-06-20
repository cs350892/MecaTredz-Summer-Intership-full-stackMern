import express from "express";
import authRoutes from "./routes/auth.routes.js"; 
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js"
dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
 connectDB();
});
