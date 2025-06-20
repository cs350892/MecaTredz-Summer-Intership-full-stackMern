import express from "express";
import { login, signup } from "../controllers/auth.controller.js"; // extension is important

const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);

export default router;
