var express = require('express');
var registerController = require('../controllers/register');

var router = express.Router();


router 
  .route('/register')
  .get(registerController.signupForm)
  .post(registerController.create)

module.exports = router;