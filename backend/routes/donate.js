import express from "express";
import { newDonate } from "../controllers/donate.js";

const router = express.Router();
router.post("/", newDonate);

export default router;
