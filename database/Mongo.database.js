const mongoose = require('mongoose')
const URI = process.env.MONGO_NOTA_URI
mongoose.set('strictQuery', false)

console.log('connecting to', URI.slice(0,30))

async function connectToDatabase() {
  try {
    await mongoose.connect(URI);
    console.log('Successfully connected to database');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {  connectToDatabase, };
