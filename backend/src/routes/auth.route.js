import express from "express";

const router = express.Router();

router.get('/login', (req,res)=> {
    res.send("welcome to login page!")
})

router.get('/logout', (req,res)=> {
    res.send('You are on logout')
})
export default router;