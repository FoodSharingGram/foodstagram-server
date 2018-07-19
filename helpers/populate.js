const Image = require('../models/food-model.js')

const populateHandler = (req, res, next, id) => {
    // let obj = {}
    // if (id) {
    //     obj = {
    //         user: id
    //     }
    // }
    //
    // Image.find(obj)
    // .populate(user)
    // .exec()
    // .then(img => {
    //     res.send(img)
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.send({
    //         error: 'error get the latest data!'
    //     })
    // })

    Image.find( {}, function(err, images) {
        if (err) {
            res.send({ error: err })
        } else {
            res.send(images)
        }
    })
}

module.exports = populateHandler
