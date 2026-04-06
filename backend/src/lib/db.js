import mongosse from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongosse.connect(process.env.MONGO_URI);
        console.log("Database connected successfully!")
    } catch (error) {
        console.error("Error connectting mongo DB!", error);
        process.exit(1); // 1 status code means fail, 0 means success
    }
}