import express from "express";
const router=express.Router();
import { getStreamToken } from "../controllers/chatControllers.js";
import { protectRoute } from "../middlewares/protectedRoute.js";

router.get("/token",protectRoute,getStreamToken);

export default router;