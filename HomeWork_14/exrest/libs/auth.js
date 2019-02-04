const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const auth = {
    verifyToken: verifyJWTToken,
    createToken : createJWToken,
    hashPassword: hashedPassword,
    isUserExist: isUserExist
}

function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, "secret", function(err, user) {
            if (err)  {
                reject(err)
            } else {
                resolve(user);
            }
        });
    });
}

function createJWToken(user) {
    // var hashedPassword = bcrypt.hashSync(user.password, 8);
    var token = jwt.sign({ username: user.username }, 'secret', {
        expiresIn: 86400 // expires in 24 hours
      });
  return token;
}

function hashedPassword (pwd){
    return bcrypt.hashSync(pwd, 8);
}

function isUserExist(email){
    const promise = new Promise(
        (resolve, reject) => {
          setTimeout(() => {
            if (users.find(o => o.email === email)) {
              resolve({invalid:true});
            } else {
              resolve( {invalid:false});
            }
          }, 500);
        }
      );
      return promise;

}

module.exports = auth;