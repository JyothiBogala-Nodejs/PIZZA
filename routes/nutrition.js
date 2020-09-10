var express = require('express');
var nutritionController = require('../controllers/nutrition');
var router = express.Router();

router
  .route('/nutrition')
  .get(nutritionController.nutrition)

module.exports = router;