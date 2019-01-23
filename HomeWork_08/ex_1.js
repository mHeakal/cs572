const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient("mongodb://admin:admin123@ds145289.mlab.com:45289/library_mum_cs572", { useNewUrlParser: true });

app.use(doConnect);

function doConnect(req, res, next) {
    client.connect((err) => {
        if (err) {
            throw err
        } else {
            console.log('Successfully connected to MongoDB')
            const db = client.db('library_mum_cs572');
            const collection = db.collection('resturants');
            client.close;
            req.coll = collection;
            return next();
        }
    })
};
app.get("/", (req, res) => {
    res.send('please enter \'q\' followed by the qustion number in the url');
});
app.get("/q1", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({}).toArray();
    res.send(results);
});
app.get("/q2", async (req, res) => {
    const collection = req.coll;
    const project = { "restaurant_id": 1, "name": 1, "district:": 1, "cuisine": 1 };
    const results = await collection.find({}).project(project).toArray();
    res.send(results);
});
app.get("/q3", async (req, res) => {
    const collection = req.coll;
    const project = { _id: 0, "restaurant_id": 1, "name": 1, "district:": 1, "cuisine": 1 };
    const results = await collection.find({}).project(project).toArray();
    res.send(results);
});
app.get("/q4", async (req, res) => {
    const collection = req.coll;
    const project = { _id: 0, "restaurant_id": 1, "name": 1, "district:": 1, "address.zipcode": 1 };
    const results = await collection.find({}).project(project).toArray();
    res.send(results);
});
app.get("/q5", async (req, res) => {
    const query = { district: "Bronx" };
    const collection = req.coll;
    const results = await collection.find(query).toArray();
    res.send(results);
});
app.get("/q6", async (req, res) => {
    const query = { district: "Bronx" };
    const collection = req.coll;
    const results = await collection.find(query).limit(5).toArray();
    res.send(results);
});
app.get("/q7", async (req, res) => {
    const query = { district: "Bronx" };
    const collection = req.coll;
    const results = await collection.find(query).skip(5).limit(5).toArray();
    res.send(results);
});
app.get("/q8", async (req, res) => {
    const query = { "address.coord": { "$lt": -95.754168 } };
    const collection = req.coll;
    const results = await collection.find(query).toArray();
    res.send(results);
});
app.get("/q9", async (req, res) => {
    const collection = req.coll;
    const query = { $and: [{ "cuisine": { $ne: "American " } }, { "grades.score": { $gt: 70 } }, { "address.coord": { $lt: -65.754168 } }] }
    const results = await collection.find(query).toArray();
    res.send(results);
});
app.get("/q10", async (req, res) => {
    const collection = req.coll;
    const query = { name: { $regex: "^Wil" } }
    const project = { _id: 0, "address": 0, "grades": 0 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});
app.get("/q11", async (req, res) => {
    const collection = req.coll;
    const query = { name: { $regex: "ces$" } }
    const project = { _id: 0, "address": 0, "grades": 0 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});
app.get("/q12", async (req, res) => {
    const collection = req.coll;
    const query = { name: { $regex: "Reg" } }
    const project = { _id: 0, "address": 0, "grades": 0 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});
app.get("/q13", async (req, res) => {
    const collection = req.coll;
    const query = { "district": "Bronx", "cuisine": { $in: ["American ", "Chinese"] } }
    const results = await collection.find(query).toArray();
    res.send(results);
});
app.get("/q14", async (req, res) => {
    const collection = req.coll;
    const query = { "district": { $in: ["Queens", "Bronx", "Island", "Brooklyn"] } }
    const project = { _id: 0, "address": 0, "grades": 0 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});
app.get("/q15", async (req, res) => {
    const collection = req.coll;
    const query = { "district": { $nin: ["Queens", "Bronx", "Island", "Brooklyn"] } }
    const project = { _id: 0, "address": 0, "grades": 0 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});
app.get("/q16", async (req, res) => {
    const collection = req.coll;
    const query = { "grades.score": { $not: { $lt: 10 } } }
    const project = { _id: 0, "address": 0, "grades": 0 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});
app.get("/q17", async (req, res) => {
    const collection = req.coll;
    const query = { "address.coord.1": { $gt: 42, $lt: 52 } }
    const project = { _id: 0, "grades": 0, "cuisine": 0, "district": 0 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});
app.get("/q18", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find().sort({ "name": 1 }).toArray();
    res.send(results);
});
app.get("/q19", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find().sort({ "name": -1 }).toArray();
    res.send(results);
});
app.get("/q20", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find().sort({ "cuisine": 1, "district": -1 }).toArray();
    res.send(results);
});
app.get("/q21", async (req, res) => {
    const collection = req.coll;
    const results = await collection.find({ "address": { $in: ["street"] } }).toArray();
    res.send(results);
});
app.get("/q22", async (req, res) => {
    const collection = req.coll;
    const query = { "address.coord.1": { $type: 1 } }
    const results = await collection.find(query).toArray();
    res.send(results);
});
app.get("/q23", async (req, res) => {
    const collection = req.coll;
    const query = { name: { $regex: "^Mad" } }
    const project = { _id: 0, "name": 1, "district": 1, "address.coord": 1, "cuisine": 1 };
    const results = await collection.find(query).project(project).toArray();
    res.send(results);
});

app.listen(3000, () => console.log('Listening on port 3000'));