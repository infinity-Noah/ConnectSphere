import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import authMessages from "./routes/message.route.js";

dotenv.config();
const PORT = process.env.PORT

const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/msg', authMessages);

app.listen(PORT, ()=> console.log(`Server started at port ${PORT}!`))