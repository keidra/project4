var express = require('express');
var User = require('../models/user');
var Product = require('../models/product');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) return res.status(500).send(err);
      res.send(users);
    });
  })
  .post(function(req, res) {
    User.create(req.body, function(err, user) {
      if (err) return res.status(500).send(err);
      res.send(user);
    });
  });

router.get('/products', function(req, res) {
  User.findById(req.user._doc._id).populate('products').exec(function(err, user) {
    console.log(err);
    res.json(user.products);
  })
});

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);
    res.send(user);
  });
});

router.post('/product/:id', function(req, res) {
  User.findById(req.user._doc._id, function(err, user) {
    user.products=user.products||[];
    user.products.push(req.params.id);
    user.save();
    res.send(user.products);
  });
});

router.delete('/products/:id', function(req, res) {
  User.findById(req.user._doc._id, function(err, user) {
    user.products=user.products||[];
    var index = user.products.indexOf(req.params.id);
    user.products.splice(index, 1);
    user.save();
    res.send(user.products);
  })
});


module.exports = router;
