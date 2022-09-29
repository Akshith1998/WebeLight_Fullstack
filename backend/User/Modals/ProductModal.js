const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  quantity: Number,
  available: Number,
  category: String,
  image: String,
  vendor: String,
});

const ProductModal = mongoose.model("Products", ProductSchema);

module.exports = ProductModal;
