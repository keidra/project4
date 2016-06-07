var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  company: String,
  name: String,
  ingredients: String,
  image: String, 
  upc: Number,
  category: String,
  price: Number
});

module.exports = mongoose.model('Products', ProductSchema);
  