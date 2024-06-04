// ./routes/productRoutes.js
// const express = require('express');
// const router = express.Router();

// const testController = require('../controllers/test.controller');

// // router.post('/newone', testController.newone);
// router.get('/dogs', testController.getDogs);

// module.exports = router;



const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ name: '图雀社区', website: 'https://tuture.co' });
});

// router.get('/dogs', testController.getDogs);


router.post('/new', (req, res) => {
    res.status(201).json({ msg: '新的篇章，即将开始' });
});

module.exports = router;