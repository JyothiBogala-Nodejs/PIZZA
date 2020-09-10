var express = require('express');
var aboutController = require('../controllers/about');
var router = express.Router();

router
  .route('/about')
  .get(aboutController.about)

module.exports = router;