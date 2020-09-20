var express = require('express');
var categoryController = require('../controllers/category');
var router = express.Router();

router
  .route('/category')
  .get(categoryController.category)

module.exports = router;