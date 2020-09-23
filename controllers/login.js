




var express = require('express');
var User = require('../models/user');

exports.loginForm = function(req, res) {
    res.render('login/new', { user: {}, errors: [] });
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
        res.render('login/new', { user: newUser, errors: err.errors });
      } else {
        res.redirect('/');
        console.log('User saved successfully!');
      }
    });
};