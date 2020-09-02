var express = require('express');
var accountController = require('../controllers/accounts');
var loginController = require('../controllers/login');
var cartController = require('../controllers/cart');
var aboutController = require('../controllers/about');
var contactController = require('../controllers/contact');
var nutritionController = require('../controllers/nutrition');
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

router
  .route('/about')
  .get(aboutController.about)

router
  .route('/contact')
  .get(contactController.contact)

router
  .route('/nutrition')
  .get(nutritionController.nutrition)
  

module.exports = router;