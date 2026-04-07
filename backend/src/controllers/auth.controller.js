import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";

export const signup = async (req, res) => {
    const { walletAddress } = req.body;

    try{
        if(!walletAddress) {
            return res.status(400).json({ message: "Please provide wallet address"})
        }

        if(walletAddress.length < 32 || walletAddress.length > 44 ){
            return res.status(400).json({ message: "Please provide a valid wallet address"})
        }

        //If user already exists, log them in 
        const existingUser = await User.findOne({ walletAddress });
        if(existingUser) {
            console.log("A user logged in")
            generateToken(existingUser._id, res);
            return res.status(200).json({
                _id: existingUser._id,
                walletAddress: existingUser.walletAddress,
            });
        }

        //Create the new user if it doesnot exists 
        const newUser = new User({ walletAddress });
        await newUser.save();

        if (newUser) {
            console.log("A new user just logged in")
            generateToken(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                walletAddress: newUser.walletAddress,
            })
        } else {
            res.status(400).json({ message: "invalid user data"})
        }
    } catch(error) {
        console.log(`There was error in signup ${error}`);
        res.status(500).json({ message: "Internal server error from auth.controller" });
    }
}

export const logout = async(_, res) => {
    res.cookie("jwt", "", {maxAge:0})
    res.status(200).json({ message: "Logout successfull"})
    console.log("A user logged out")
}
