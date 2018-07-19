const moment = require('moment');
const Image = require('../models/food-model')
const User = require('../models/user-model')
const populateHandler = require('../helpers/populate')

const imgDetail = (req, res, next) => {
    let userId = req.decoded._id

    Image.create({
        user: userId,
        title: req.body.title,
        ta: req.body.description,
        url: req.file.cloudStoragePublicUrl,
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

    res.send("Still cant get Image, yet.")

    // const uuid = req.decoded._id
    //
    // if (!uuid) {
    //     res.send({
    //         error: "No authorization key!"
    //     })
    // }

    // get image method
    // populateHandler(req, res, next)
}

module.exports = { imgDetail, getImage }
