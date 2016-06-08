var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  company: String,
  name: String,
  ingredients: String,
  image: String, 
  upc: Number,
  diet: Number,
  price: Number, 
  category: String
});

module.exports = mongoose.model('Products', ProductSchema);
  