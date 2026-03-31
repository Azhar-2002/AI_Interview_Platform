import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import {protect} from './middleware/auth.middleware.js';
import interviewRoutes from './routes/interview.routes.js';
import http from 'http';
import { Server } from 'socket.io';
import executionRoutes from "./routes/execution.routes.js";
import cors from 'cors';


dotenv.config();
const PORT = process.env.PORT || 10000;
const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: "*"
    }
});

app.use(express.json());
app.use(cors());
app.use("/api/code", executionRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/auth", authRoutes);

connectDB();

// app.listen(5000,()=>{
//     console.log("Server is running on port 5000");
// });
app.get("/",(req,res)=>{
    res.send("Server is Running");
});
app.get("/api/test", (req,res)=>{
    res.json({message: "Protected route working"});
});
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

    socket.on("join-room", (sessionId) => {
    socket.join(sessionId);
  });

  io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  });

   socket.on("code-change", ({ sessionId, code }) => {
    socket.to(sessionId).emit("code-update", code);
  });
   socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
server.listen(PORT, "0.0.0.0",() => {
  console.log(`Server running on port ${PORT}`);
});