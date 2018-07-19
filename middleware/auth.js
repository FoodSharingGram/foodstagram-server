const jwt = require ('jsonwebtoken');
const User = require('../models/user-model');
require('dotenv').config()

const auth = function(req, res, next){
   let {token} = req.headers;

   if(token){
      jwt.verify(token, process.env.secretKey, function(err, decoded){
         if(decoded){
            req.decoded = decoded;
            next()
         }
         else{
               res.status(403).json("LOGIN DL BRO")
         }
      })
   }
}

module.exports = auth;