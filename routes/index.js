// // index.js
const express = require("express");
const router = express.Router();
const rootRoutes = require('./root.routes.js')
const testRoutes = require('./test.routes.js')

router.use('/',rootRoutes);
router.use('/test', testRoutes);

module.exports = router;

