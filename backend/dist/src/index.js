import express from "express";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/messages.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
server.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
