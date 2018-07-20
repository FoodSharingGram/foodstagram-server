const moment = require('moment');
const Image = require('../models/food-model')
const User = require('../models/user-model')
const { populateHandler } = require('../helpers/populate')
const oauth = require('oauth')
const mongoose = require('mongoose')

const uberOauth = new oauth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.consumer_key,
    process.env.consumer_secret,
    '1.0A',
    null,
    'HMAC-SHA1'
)


const imgDetail = (req, res, next) => {
    let userId = req.body.user

    // deployment case
    let arrayoftags = (req.body.tags).split(" ")

    Image.create({
        user: userId,
        title: req.body.title,
        description: req.body.description,
        url: req.file.cloudStoragePublicUrl,
        // deployment case
        tags: arrayoftags,
        tags: req.body.tags,
        comments: req.body.comments,
        date: moment().format('LLL')
    }, (err, result) => {
        if (err) {
            res.send({
                error: "error post image"
            })
        }

        res.send(result)
    })
}

const getImage = (req, res, next) => {
    populateHandler(req, res, next)
}

const getImageByUser = (req, res, next) => {
    let userId = req.params.userId

    console.log(userId)

    // User.findById(userId)
    // .then(userData => {
    //     res.send(userData)
    // })
    // .catch(err => {
    //     res.send(err)
    // })

    Image.find({user: userId})
    .then(imageByUser => {
        res.send(imageByUser)
    })
    .catch(err => {
        res.send(err)
    })
}

const deleteImageById = (req, res, next) => {
    let imageId = req.params.imageId

    Image.deleteOne({ _id: imageId})
    .then(deletedImage => {
        res.send(deletedImage)
    })
    .catch(err => {
        res.send(err)
    })
}

const postImageToTwitter = (req, res, next) => {
  uberOauth.post(
     'https://api.twitter.com/1.1/statuses/update.json',
     process.env.user_token,
     process.env.user_secret,
     {
        status: req.body.status
     },
     (err, data, response) => {
         if (err) {
              res.send(err)
             // res
             //   .status(500)
             //   .json({ message: err.message })
         } else {
             res
               .status(200)
               .json(JSON.parse(data))
         }
     }
  )
}

module.exports = { imgDetail, getImage, getImageByUser, deleteImageById, postImageToTwitter  }
