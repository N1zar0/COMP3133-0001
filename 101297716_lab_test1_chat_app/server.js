const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const User = require('./models/User');
const Message = require('./models/Message');


mongoose.connect('mongodb://localhost:27017/chatApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


const store = new MongoStore({
  uri: 'mongodb://localhost:27017/chatApp',
  collection: 'sessions'
});

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: store
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/chat', require('./routes/chat'));


io.on('connection', socket => {
  console.log('Socket connected:', socket.id);

  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    socket.broadcast.to(room).emit('message', `${username} has joined the room`);
  });

  socket.on('chatMessage', async ({ username, room, message }) => {
    const newMessage = new Message({
      from_user: username,
      room: room,
      message: message
    });
    await newMessage.save();
    io.to(room).emit('message', { username, message });
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
