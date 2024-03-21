require('dotenv').config();
const mongoose = require('mongoose');

module.exports = async function conDb() {
  await mongoose.connect(process.env.MONGO_URI);
};