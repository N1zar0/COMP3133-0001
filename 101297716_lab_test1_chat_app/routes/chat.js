const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/:room', async (req, res) => {
  try {
    const room = req.params.room;
    const messages = await Message.find({ room }).sort({ date_sent: 1 });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
