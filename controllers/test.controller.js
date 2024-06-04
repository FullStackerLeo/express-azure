// ./controllers/dogController.js
const dogService = require('../services/test.services.js')

exports.getRoot = (req, res) => {  res.json({ name: 'leo', website: 'https://ibm.com' });};

exports.getDogs = async (req, res) => {
  try {
    const allDogs = await dogService.getDogs();
    return res.status(200).json(allDogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createDog = async (req, res) => {
  try {
    const newDog = await dogService.createDog(req.body);
    return res.status(201).json(newDog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};