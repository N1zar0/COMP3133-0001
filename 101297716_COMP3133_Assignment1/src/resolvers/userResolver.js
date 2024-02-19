const bcrypt = require('bcryptjs');
const User = require('../models/user');

const userResolver = {
  Mutation: {
    signup: async (_, { input }) => {
      try {
        const existingUser = await User.findOne({ $or: [{ username: input.username }, { email: input.email }] });
        if (existingUser) {
          throw new Error('Username or email already exists');
        }
        
        const hashedPassword = await bcrypt.hash(input.password, 10);
        
        const newUser = new User({
          username: input.username,
          email: input.email,
          password: hashedPassword
        });
        
        await newUser.save();
        
        return newUser;
      } catch (error) {
        throw new Error(`Failed to create new user: ${error.message}`);
      }
    },
    login: async (_, { input }) => {
      try {
        const user = await User.findOne({ $or: [{ username: input.usernameOrEmail }, { email: input.usernameOrEmail }] });
        if (!user) {
          throw new Error('Invalid User or Password');
        }
        
        const isPasswordValid = await bcrypt.compare(input.password, user.password);
        if (!isPasswordValid) {
          throw new Error('Invalid User or Password');
        }
        
        return 'Login successful'; 
      } catch (error) {
        throw new Error(`Failed to login: ${error.message}`);
      }
    }
  }
};

module.exports = userResolver;
