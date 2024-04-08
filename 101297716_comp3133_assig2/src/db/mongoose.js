const mongoose = require('mongoose');

const uri = 'mongodb+srv://atassinizar:9TaghiK5yxynrFWi@cluster0.q6cpejp.mongodb.net/?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose.connect(uri, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error.message));

module.exports = mongoose.connection;