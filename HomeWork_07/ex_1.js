const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://admin:admin123@ds145289.mlab.com:45289/library_mum_cs572');

client.connect(function (err) {

    const db = client.db('library_mum_cs572');
    const collection = db.collection('Books');

    collection.findOne({}, function(err, doc){
        console.dir(doc);
        client.close;
    });
    console.dir('Done');
});