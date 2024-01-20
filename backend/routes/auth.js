import express from "express";
import { login } from "../controllers/auth.js";

const router = express();
router.post("/auth/login", login);

export default router;
