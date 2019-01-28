var express = require('express');
var router = express.Router();
var gradesDemo = require("../model/data");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var validate = require('../middleware/validate');
var app = express();
app.use("validate", validate);


var grades = gradesDemo;

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const data = await grades;
  res.send(data);
  } catch (error) {
    res.status(400).send("Error");
  }
});

router.get("/:id", async (req, res) => {
 try {
  const data = await grades.find(grade => grade.id == req.params.id);
  res.send(data);
 } catch (error) {
   res.status(400).send("error");
 }
});

router.post("/", validate ,jsonParser,  (req, res) => {

  try {
    const id = {
      id: grades.length + 1
    };
    const newData = req.body;
    const idData = id;
    const data = {...idData , ...newData};
    grades.push(data);
    res.send("success");
  } catch (error) {
    res.status(400).send("Error");
  }

});

router.delete("/:id", async (req, res) => {

  try {
    const index = await grades.findIndex(i => i.id == req.params.id);
    const data = grades.splice(index, 1);
    res.send(data)
  } catch (error) {

    res.status(400).send("Error");
    
  }
  
});

router.put("/:id", validate, async (req, res) => {

  try {
    const index = await grades.findIndex(i => i.id == req.params.id);

    // const newData = {
    //   name: req.body.name,
    //   course: req.body.course,
    //   grade: req.body.grade
    // }
    grades[index] = req.body;
    res.send(grades[index]);
    
  } catch (error) {
    res.status(400).send("error");
  }

})

module.exports = router;