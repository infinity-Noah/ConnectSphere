import express from "express";

const router = express.Router();

router.get('/send', (req,res) => {
    res.send('Welcome to the homepage!')
})

export default router;