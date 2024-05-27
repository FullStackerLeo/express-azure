const express = require('express');
const router = express.Router();

const control = require('../controllers/controller');

router.get('/hbs', (req, res) => {res.render('index');});
router.get('/controller', control.index);                                 //controler

router.post("/ask", control.ask);

module.exports = router;