const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Ecommerce', (err, client) => {
    if (err) {
        return console.log('Unable to connet to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('Ecommerce')

    // db.collection('Products').find({productType:'shirts'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    // db.collection('Products').find({productType:'shoes'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    db.collection('Products').find({productBrand:'off-white'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.collection('Products').find({productBrand:'yeezy'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // });

    // client.close();
});