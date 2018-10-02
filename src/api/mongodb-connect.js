// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Ecommerce', (err, client) => {
    if (err) {
        return console.log('Unable to connet to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Ecommerce')

    db.collection('Products').insertOne({
                title: "OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'",

                productType:"shoes",
                productBrand:"off-white",
                productImage:"/img/products/shoe1.jpeg",
                price: 750,
                description : "Inspired by Michael Jordan’s alma mater, the Off-White x Air Jordan 1 Retro High OG ‘UNC’ carries a classic two-tone composition, filtered through Virgil Abloh’s unique design prism.",
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert product', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
            // console.log(result.ops);
    });

    client.close();
});