const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Store active users
const activeUsers = new Map();

// Serve static files
app.use(express.static('public'));

// Socket.IO connection handler
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle user joining
    socket.on('user joined', (username) => {
        activeUsers.set(socket.id, username);
        console.log(`${username} joined the chat`);
        io.emit('user joined', username);
    });

    // Handle chat messages
    socket.on('chat message', (data) => {
        console.log(`Message from ${data.username}:`, data.message);
        socket.broadcast.emit('chat message', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        const username = activeUsers.get(socket.id);
        if (username) {
            console.log(`${username} left the chat`);
            io.emit('user left', username);
            activeUsers.delete(socket.id);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});