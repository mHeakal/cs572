const express = require("express");
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const location = require("./location.js");
const client = new MongoClient("mongodb://localhost", { useNewUrlParser: true });

const app = express();

app.set("port", process.env.PORT || 3000);
const port = app.get("port");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    client.connect((err) => {
        if (err) throw err
        console.log("successfully connected to DB")
        const db = client.db("week2");
        const collection = db.collection("locations");
        req.collec = collection;
        return next();
    })
})

app.use("/location", location);
app.listen(port, () => console.log(`Listening on port ${port}`));