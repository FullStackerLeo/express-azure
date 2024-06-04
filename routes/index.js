// // index.js
const express = require("express");
const router = express.Router();
const testRoutes = require('./test.routes.js')

router.use('/test', testRoutes);

module.exports = router;

