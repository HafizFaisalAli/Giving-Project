import express from "express";
import { newDonate, getAllDonates } from "../controllers/donate.js";

const router = express.Router();
router.post("/", newDonate);
router.get("/", getAllDonates);

export default router;
