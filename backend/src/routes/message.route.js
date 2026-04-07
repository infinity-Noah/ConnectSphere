import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get('/send',protectRoute, (req,res) => {
    res.send('Welcome to the homepage!')
})

export default router;