const express = require('express');
const router = express.Router();

const home = require('../controllers/pic_home');
const image = require('../controllers/pic_image');
const { handleChatGPT } = require('../controllers/openaiController');


router.get('/', (req, res) => {    res.render('index');  });
router.get('/contact', (req, res) => {res.render('contact');});
router.get('/pic', home.index);
router.get('/completion', handleChatGPT);


router.get('/images/:image_id', image.index);
router.post('/images', image.create);
router.post('/images/:image_id/like', image.like);
router.post('/images/:image_id/comment', image.comment);


module.exports = router;