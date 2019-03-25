const mongoose = require('mongoose');

//Esquema
const brandSchema = new mongoose.Schema({
    brand:{
        type: String,
        required: true
    }
});

//Modelo
const brandSchema = mongoose.model('Brand',brandSchema, 'brands')

module.exports = brandModel;