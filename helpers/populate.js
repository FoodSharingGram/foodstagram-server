const Image = require('../models/food-model.js')

const populateHandler = (req, res, next) => {
    Image.find()
    .populate('user')
    .exec(function(err, data) {
      if (err) {
          res.send(err)
      } else {
          res.send(data)
      }
    })
}

module.exports = { populateHandler }
