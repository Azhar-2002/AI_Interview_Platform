import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

// join room
socket.emit("join-room", "123");

// send code after 2 sec
setTimeout(() => {
  socket.emit("code-change", {
    sessionId: "123",
    code: "console.log('Hello World');"
  });
}, 2000);

// listen for updates
socket.on("code-update", (code) => {
  console.log("Received update:", code);
});