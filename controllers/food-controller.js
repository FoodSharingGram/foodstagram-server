const Image = require('../models/food-model')
const User = require('../models/user-model')
const populateHandler = require('../helpers/populate')

const imgDetail = (req, res, next) => {
      res.send({message: "create image"})
}

const getImage = (req, res, next) => {
    const uuid = req.headers.auhorization

    if (!uuid) {
        res.send({
            error: "No authorization key!"
        })
    }

    populateHandler(req, res, next)
}

module.exports = { imgDetail, getImage }
