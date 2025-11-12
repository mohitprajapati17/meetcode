import express from "express";
const router=express.Router();
import { protectRoute } from "../middlewares/protectedRoute.js";
import { createSession,getActiveSessions,getMyRecentSessions,getSessionById,joinSession,endSession } from "../controllers/sessionController.js";
router.post("/",protectRoute,createSession);
router.get("/active",protectRoute,getActiveSessions);
router.get("/my-recent",protectRoute,getMyRecentSessions);

router.get("/:id",protectRoute,getSessionById);
router.get("/:id/join",protectRoute,joinSession);
router.get("/:id/end",protectRoute,endSession);

export default router;

