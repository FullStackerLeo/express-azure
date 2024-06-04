// root.routes.js
const express = require('express');
const router = express.Router();
// const mainController = require("../controllers");

// router.get('/hbs', (req, res) => {res.render('index');});
router
  .route("/hbs")
  .get((req, res) => {res.render('index');});

  // router
//   .route("/dashboard")
//   .get(mainController.dashboardPage);

module.exports = router;