# Real-Time Chat Application

A modern real-time chat application built with Node.js, Express, and Socket.IO featuring a clean UI and instant messaging capabilities.

## Features

- Real-time messaging
- User join/leave notifications
- Modern UI with gradient design
- Message history
- Typing indicators
- Emoji support 👋 🎉

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Real-time Communication: Socket.IO

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
node server.js
```

4. Open `http://localhost:3000` in your browser

## Code Structure

### Server Setup (server.js)
```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
```

### Socket Connection Handler
```javascript
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('user joined', (username) => {
        activeUsers.set(socket.id, username);
        io.emit('user joined', username);
    });
});
```

### Client-side Message Handling
```javascript
socket.on('chat message', (data) => {
    if (data.username !== username) {
        addMessage(data.username, data.message, false);
    }
});
```

## Project Structure
```
chat-app/
├── package.json
├── server.js
├── README.md
└── public/
    └── index.html
```

## Environment Variables

Create a `.env` file in the root directory:
```env
PORT=3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- Socket.IO documentation
- Express.js
- Node.js community

## Contact

Project Link: [https://github.com/sara-1515/chat-app](https://github.com/your-username/chat-app)
