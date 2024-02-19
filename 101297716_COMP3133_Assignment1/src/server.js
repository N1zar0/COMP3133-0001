const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const userSchema = require('./schemas/UserSchema');
const employeeSchema = require('./schemas/employeeSchema');
const userResolver = require('./resolvers/userResolver');
const employeeResolver = require('./resolvers/employeeResolver');


const uri = 'mongodb+srv://atassinizar:9TaghiK5yxynrFWi@cluster0.q6cpejp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error.message));

const app = express();

const server = new ApolloServer({
  typeDefs: [userSchema, employeeSchema],
  resolvers: [userResolver, employeeResolver],
  context: ({ req }) => ({ req })
});

server.start().then(() => {
  server.applyMiddleware({ app });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
