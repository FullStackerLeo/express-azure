const express = require('express');
const router = express.Router();
const dogController = require('../controllers/test.controller');

router.get('/', dogController.getRoot);

router.route('/dogs')
  .get(dogController.getDogs)
  .post(dogController.createDog);
  

// // GET /dogs
// router.get('/dogs', dogController.getDogs);

// // POST /dogs
// router.post('/dogs', dogController.createDog);

module.exports = router;