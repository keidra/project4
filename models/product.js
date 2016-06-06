var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  image: String, 
  upc: Number,
  category: String
});

module.exports = mongoose.model('Product', ProductSchema);
