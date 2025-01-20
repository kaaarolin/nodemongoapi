require("dotenv").config(); // enviromental variabel 
const express = require("express");
const app = express();
const mongoose = require("express");
const PORT = 3000;
const Product = require("./models/productModel");
app.use(express.json()); // för att kunna förstå json 

app.get("/", (req, res) => {
    res.send("Welcome to my mongoAPI")
})

app.post("/blogpost", (req, res) => {
    res.send("This is a postrequest")
});

app.get("/api/products", async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get("/api/product/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await.Product.findbyId(id);
        res.status(200).json.product;
    } catch (error) {
        res.status(500);
    }
});

//update CRUD
app.put("/api/product/:id", async(req, res) => {
    const {id} = req.params;
    const product = await.Product.findbyIdAndUpdate(id, req.body);

    // om produkten ej finns
    if(!product) {
        return res.status(400).json({message: "Product does not exist"});
    }

    res.status(200).json(product);
});

app.post("/api/product", (req, res) => {
    //console.log(req.body);
    //res.send(req.body);
    try {
        const product = await Product.create(req.body); 
        res.status(200).json(product);
    } catch (error) {
        console.log(Error.message);
        res.status(404);
    }
    
    
});




mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to mongo");
    
    app.listen(PORT,() => {
        console.log("listening to 3000");
    });
});
    // skriv node server.js i terminalen för att se om det funkar: ska få: connected to mongo och listening to 3000n som svar