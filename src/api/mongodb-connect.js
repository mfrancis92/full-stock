// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Ecommerce', (err, client) => {
    if (err) {
        return console.log('Unable to connet to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Ecommerce')

    db.collection('Products').insertOne({
        title: "OFF-WHITE Red Checked",

        productType:"shirts",
        productBrand:"off-white",
        productImage:"/img/products/shirt3.jpg",
        price: 655,
        description: "Long sleeves shirt featuring classic tartan pattern in tones of red, blue and black. Spread collar. Buttons closure at front and 'CHECK SHIRT' text print at front. Oversize fitting.",
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert product', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});