const User  = require('../models/user-model');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const axios = require ('axios');

class UserController{

   static logIn(req,res){
      let {email, password} = req.body;
      User.findOne({ email })
      .then(function(user){
         user.comparePassword(password, function(err, isMatch){
            if(err){
               res
               .status(401)
               .json({
                  message: err.message
               })
            }
            else{
               if(isMatch){
                  let token = jwt.sign({_id: user.id}, process.env.secretKey)
                  res
                  .status(200)
                  .json({
                     user, 
                     token, 
                     message: "Token generated"
                  });
               }
               else{
                  res
                  .status(400)
                  .json({
                     message: "Password is wrong!"
                  })
               }
            }
         })
      })
      .catch(function(err){
         res
         .status(400)
         .json("User is not found!");
      })
   } 
   
   static findOne(req, res){
      let {id} = req.headers;

      User.findById(id)
      .then(function(user){
         res.status(200)
         .json(user);
      })
      .catch(function(err){
         res.status(400)
         .json(err.message)
      })
   }


   static register(req, res){
      let {username, email, password, city} = req.body;
      //Find lat and long of user's city
      axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${city}`,{
         headers:{
            "Accept": "application/json",
            "user-key": process.env.ZOMATO_KEY,
         }
      })
      .then(function(response){
         let lat = response.data.location_suggestions[0].latitude;
         let long = response.data.location_suggestions[0].longitude;

         User.create({
               email,
               username,
               password,
               city,
               lat,
               long
         })
         .then(function(){
               res
               .status(201)
               .json({
                  message: "Successfully created new user",
               })
         })
         .catch(function(err){
            res
               .status(401)
               .json({
                  message: err.message
               })
         })
      })
      .catch(function(err){
         res.status(400).json(err)
      })
   }

   static updateUser(req,res){
      let {email, username, password,city} = req.body;
      let {id} = req.headers;
      
      User.findById({_id: id})
      .then(function(user){

         axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${city}`,{
            headers:{
               "Accept": "application/json",
               "user-key": process.env.ZOMATO_KEY,
            }
         })
         .then(function(response){
            let lat = response.data.location_suggestions[0].latitude;
            let long = response.data.location_suggestions[0].longitude;
            user.email = email;
            user.username = username;
            user.password = password;
            user.city = city;
            user.lat = lat;
            user.long = long;
            // console.log(user);
            user.save()
            .then(function(updated){
               User.findById({_id:id})
               .then(function(updatedInfo){
                  res.status(200)
                  .json({
                     message: "Info Updated",
                     updatedInfo
                  })
               })
               .catch(function(err){
                  res.status(400).json(err.message);
               })
            })        
         })
         .catch(function(err){
            res.status(400).json(err.message);
         })
      })
   }
}

module.exports = UserController;