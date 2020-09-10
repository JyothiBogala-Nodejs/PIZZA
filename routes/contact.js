var express = require('express');
var contactController = require('../controllers/contact');
var router = express.Router();

router
.route('/contact')
.get(contactController.contact)

module.exports = router;