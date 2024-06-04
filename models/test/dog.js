// ./models/test/dog.js
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  isGoodBoy: { type: Boolean, required: false, default: true },
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;









// const mongoose = require("mongoose");

// const DogSchema = new mongoose.Schema({
//     name: {        type: String,        required: true,    },
//     breed: {        type: String,        required: true,    },
//     age: {        type: Number,        required: true,    },
//     isGoodBoy: {        type: Boolean,        required: false,        default: true,    },
// });

// const Dog = mongoose.model("Dog", DogSchema);       //schema --> model

// module.exports = Dog;       // export model