const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:{type:String, require:true},
  price:{type:Number, require:true},
  description:{type:String},
  image:{type:String},
  stock:{type:Number, default:0},
 });
 
 module.exports = mongoose.module('product', productSchema);