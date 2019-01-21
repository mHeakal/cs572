
var validate = function (req, res, next) {

    function isValid(data) {
        try {
            JSON.parse(JSON.stringify(data));
        } catch (e) {
            return false;
        }
        return true;
    }

   
    var valid = isValid(req.body);
    // console.log(valid);
    if (valid) return next();

    console.log("ivalid");
    res.end("Ivalid JSON data");
}

module.exports = validate;