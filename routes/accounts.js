var express = require('express');
var accountController = require('../controllers/accounts');
var loginController = require('../controllers/login');
var router = express.Router();

router 
  .route('/register')
  .get(accountController.signupForm)
  .post(accountController.create)

router
  .route('/login')
  .get(loginController.loginForm)
  

module.exports = router;