const moment = require('moment');
const Image = require('../models/food-model')
const User = require('../models/user-model')
const { populateHandler } = require('../helpers/populate')

const imgDetail = (req, res, next) => {
    let userId = req.decoded._id

    let arrayoftags = (req.body.tags).split(" ")

    Image.create({
        user: userId,
        title: req.body.title,
        description: req.body.description,
        url: req.file.cloudStoragePublicUrl,
        tags: arrayoftags,
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

module.exports = { imgDetail, getImage, getImageByUser, deleteImageById  }
