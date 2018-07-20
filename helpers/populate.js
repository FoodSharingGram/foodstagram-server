const Image = require('../models/food-model.js')

const populateHandler = (req, res, next) => {
    Image.find({})
    .populate('user')
    .exec()
    .then(img => {
        res.send(img)
    })
    .catch(err => {
        res.send({
            error: 'error get the latest data!'
        })
    })
}

module.exports = { populateHandler }
