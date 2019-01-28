const express = require("express");
const app = express();

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient("mongodb+srv://admin:admin123@cluster0-0guuu.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

app.use(doConnect);

function doConnect(req, res, next) {
    client.connect((err) => {
        if (err) {
            throw err
        } else {
            console.log('Successfully connected to MongoDB')
            const db = client.db('MUM_CS572');
            const collection = db.collection('zips');
            client.close;
            req.coll = collection;
            return next();
        }
    })
};

app.get("/", (req, res) => {
    res.send('enter \'q\' followed by the point number');
});

app.get("/q1", (req, res) => {
    const collection = req.coll;
    const results = collection.aggregate([
        {
            '$match': {
                'state': 'IA'
            }
        }
        , {
            '$project': {
                '_id': 0,
                'city': 1,
                'zipCode': '$_id'
            }
        }, {
            '$sort': {
                'city': 1
            }
        }
    ]);
    res.send(results);
});

app.get("/q2", (req, res) => {
    const collection = req.coll;
    const results = collection.aggregate([
        {
            '$match': {
                'pop': {
                    '$gte': 1000
                }
            }
        }, {
            '$project': {
                '_id': 0,
                'city': 1,
                'zipCode': '$_id'
            }
        }, {
            '$sort': {
                'pop': 1
            }
        }
    ]);
    res.send(results);
});

app.get("/q3", (req, res) => {
    const collection = req.coll;
    const results = collection.aggregate([
        {
            '$group': {
                '_id': '$city',
                'count': {
                    '$sum': 1
                }
            }
        }, {
            '$match': {
                'count': {
                    '$gt': 1
                }
            }
        }, {
            '$sort': {
                'state': 1,
                'city': 1,
                'count': -1
            }
        }
    ]);
    res.send(results);
});

app.get("/q4", (req, res) => {
    const collection = req.coll;
    const results = collection.aggregate([
        {
            '$sort': {
                '_id.state': 1,
                'population': 1
            }
        }, {
            '$group': {
                '_id': {
                    'state': '$state',
                    'city': '$city'
                },
                'population': {
                    '$sum': '$pop'
                }
            }
        }, {
            '$group': {
                '_id': '$_id.state',
                'city': {
                    '$first': '$_id.city'
                },
                'popilation': {
                    '$first': '$population'
                }
            }
        }, {
            '$sort': {
                '_id': 1
            }
        }
    ]);
    res.send(results);
});

app.listen(3000, () => console.log('Listening on port 3000'));