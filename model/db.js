// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/progress');
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
export default connectDB;