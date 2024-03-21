require('dotenv').config();
const mongoose = require('mongoose');

// const conDb = async() => {
//     console.log(process.env.MONGO_URI);
//     await mongoose.connect("mongodb+srv://abrahampaucara:sUBaEWeuEVVZfCQN@movies.wgf3nax.mongodb.net/movies?retryWrites=true&w=majority&appName=movies");
// };
//mongoose.exports = conDb;

module.exports = async function conDb() {
  await mongoose.connect(process.env.MONGO_URI);
};