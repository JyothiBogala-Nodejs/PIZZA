var express = require('express');
var accountController = require('../controllers/accounts');
var loginController = require('../controllers/login');
var cartController = require('../controllers/cart');
var router = express.Router();

router 
  .route('/register')
  .get(accountController.signupForm)
  .post(accountController.create)

router
  .route('/login')
  .get(loginController.loginForm)

router
  .route('/cart')
  .get(cartController.cart)
  

module.exports = router;