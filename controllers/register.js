var express = require('express');
var User = require('../models/user');

exports.signupForm = function(req, res) {
    res.render('register/new', { user: {}, errors: [] });
};

exports.create = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    var newUser = new User({
      username: username,
      password: password
    });

    newUser.save(function(err) {
      if (err) {
        res.render('register/new', { user: newUser, errors: err.errors });
      } else {
        res.redirect('/');
        console.log('User saved successfully!');
      }
    });
};
  

