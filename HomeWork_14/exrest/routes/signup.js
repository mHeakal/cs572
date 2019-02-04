var express = require('express');
const auth = require('../libs/auth.js')
var router = express.Router();

const saltRounds = 10;

/* GET users listing. */
router.post('/', function (req, res, next) {
    var user = encryptPassword(req.body);
    storeObj(user);
    res.send({ status: "success", message: "you are a user now!" });
});


router.post('/isuserexist', function (req, res, next) {
  auth.isUserExist(req.body.email).then((data) => {
    res.json(data);
  }).catch(((err) => { console.log(err) }))
})

function encryptPassword(body) {
  var obj = {};
  obj.fname = body.firstname;
  obj.lname = body.lastname;
  obj.email = body.email;
  obj.password = auth.hashPassword(body.password)
  return obj;
}

function storeObj(obj) {
  users.push(obj);
  console.log(users)
}
module.exports = router;

