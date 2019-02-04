var express = require('express');
var router = express.Router();
const auth = require('../libs/auth');

router.get('/', function(req, res, next) {


    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];
        auth.verifyToken(token).then((user) => {
            return res.status(200).json({ status: "success", message: "welcome!", user: user});
        }).catch(() => {
            return res.json({ status: "402", message: "You can't access this page!" });
        })
    } else {
        return res.json({ status: "403", message: "You can't access this page!" });
    }

    
});

module.exports = router;