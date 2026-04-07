import express from "express";
import { signup, logout } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/login', signup);

router.post('/logout',protectRoute, logout);

router.get('/check', protectRoute, (req,res) => res.status(200).json(req.user));

export default router;