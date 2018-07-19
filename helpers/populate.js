const Image = require('../models/food-model.js')

const populateHandler = (req, res, next, id) => {
    let obj = {}
    if (id) {
        obj = {
            user: id
        }
    }

    Image.find(obj)
    .populate(user)
    .exec()
    .then(img => {
        res.send(img)
    })
    .catch(err => {
        console.log(err)
        res.send({
            error: 'error get the latest data!'
        })
    })
}

module.exports = populateHandler
