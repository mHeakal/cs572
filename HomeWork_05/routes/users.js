var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await axios.get('https://randomuser.me/api/?results=10');
    res.set({
      'link': '< href=https://randomuser.me/api/?results=10&page=2;  rel="next"/>',
      'Cache-Control': 'public, max-age=86400'
    });
    res.send(users.data);
  } catch (error) {
    res.status(404).send("Not found");
  }
});
module.exports = router;