var express = require('express');
var loginController = require('../controllers/login');
var router = express.Router();

router
  .route('/login')
  .get(loginController.loginForm)
  .post(loginController.create)
  
module.exports = router;