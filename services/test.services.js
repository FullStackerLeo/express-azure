// ./services/dogService.js
const { Dog } = require('../models');

exports.getDogs = async () => {
  try {
    const allDogs = await Dog.find();
    return allDogs;
  } catch (error) {
    throw new Error('Internal Server Error');
  }
};

exports.createDog = async (dogData) => {
  try {
    const newDog = new Dog(dogData);
    const insertedDog = await newDog.save();
    return insertedDog;
  } catch (error) {
    throw new Error('Internal Server Error');
  }
};