const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    price: Number,
    details: String,
    category: String,
    recipe: String
});

module.exports = mongoose.model('Product', productSchema);