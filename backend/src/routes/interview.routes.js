import express from "express";
import { startInterview, getInterview } from "../controllers/interview.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/start", protect, startInterview);
router.get("/:id", protect, getInterview);

export default router;