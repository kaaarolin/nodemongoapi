const mongoose = require ("mongoose");

const productSchema = mongoose.Schema(
    {
        name:{
            type: String, 
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
        
    }
);
// schema = blueprint

const Product = mongoose.mongo.MongoDBCollectionNamespace("Product", productSchema);
module.exports = Product;