var express = require('express');
var Product = require('../models/product');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Product.find(function(err, products) {
      if (err) return res.status(500).send(err);
      res.send(products);
    });
  })
router.route('/:id')
  .get(function(req, res) {
    Product.findById(req.params.id, function(err, product) {
      if (err) return res.status(500).send(err);
      res.send(product);
    });
  })
  .put(function(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;
