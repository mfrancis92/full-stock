const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Product} = require('./models/product');

const app = express();

app.use(bodyParser.json());

app.post('/products', (req, res) => {
    let product = new Product({
        title: req.body.title,
        type: req.body.type,
        brand: req.body.brand,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description
    });

    product.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/products', (req, res) => {
    Product.find().then((products) => {
        res.send({products});
    }, (err) => {
        res.status(400).send(err);    
    });
});

app.listen(1303, () => {
    console.log('Started on port 1303');
});

module.exports = {app};