const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  from_user: { type: String, required: true },
  to_user: { type: String },
  room: { type: String },
  message: { type: String, required: true },
  date_sent: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
