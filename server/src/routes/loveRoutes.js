import express from "express";
import { validatePassword,generateLetter } from "../controllers/loveController.js";

const router = express.Router();

router.post("/validate",validatePassword);
router.post("/generate",generateLetter);

export default router;