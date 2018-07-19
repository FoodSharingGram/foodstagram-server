const express = require('express')
const router = express.Router()
const img = require('../middleware/img')
const auth = require('../middleware/auth')

const { imgDetail, getImage } = require('../controllers/food-controller.js')

router.get('/', (req, res) => {
    res.send('food - alive')
})

//  test case all middlewares and creating image object in imgdetail
router.post('/image', auth, img.multer.single('file'), img.sendUploadToGCS, imgDetail)

router.get('/image', auth, getImage)

module.exports = router;
