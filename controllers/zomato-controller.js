const User  = require('../models/user-model');
const jwt = require('jsonwebtoken')
const axios = require('axios')

class ZomatoController{

   static searchFood(req, res){
      let q = req.headers.title //Get image title as search values (eg: nasi goreng);
      let userId = req.decoded._id
      let lat, long;
      //Get lat and long from user 
      User.findById(userId)
      .then(function(user){
         lat = user.lat;
         long = user.long;

         //Sorted by rating, 100m (1km) radius from location, limit to 10
         axios.get(`https://developers.zomato.com/api/v2.1/search?q=${q}&count=10&lat${lat}&lon=${long}&radius=100&sort=rating`,{
            headers:{
               "Accept": "application/json",
               "user-key": process.env.ZOMATO_KEY,
            }
         })
         .then(function(response){
            let result = response.data;
            res.status(200)
            .json({
               result
            })
         })
         .catch(function(err){
            res.status(400).json(err.message);
         })
      })
      .catch(function(err){
         res.status(400).json(err.message);
      })
   }

   static getReview(req,res){
      let id = req.headers.id;

      //Shows 8 reviews
      axios.get(`https://developers.zomato.com/api/v2.1/reviews?res_id=${id}&count=8`,{
         headers:{
            "Accept": "application/json",
            "user-key": process.env.ZOMATO_KEY,
         }
      })
      .then(function(response){
         let result = response.data;

         res.status(200)
         .json(result);
      })
      .catch(function(err){
         res.status(400).json(err.message);
      })
   }

}


module.exports = ZomatoController;