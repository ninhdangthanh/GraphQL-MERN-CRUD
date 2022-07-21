/** @format */

const mongoose = require("mongoose");
require('dotenv').config()


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log('error', error)
  }
}
  
module.exports = connectDB