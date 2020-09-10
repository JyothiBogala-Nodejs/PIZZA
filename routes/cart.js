var express = require('express');
var cartController = require('../controllers/cart');
var router = express.Router();

router
  .route('/cart')
  .get(cartController.cart)

module.exports = router;