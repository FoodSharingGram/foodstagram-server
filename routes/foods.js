const express = require('express')
const router = express.Router()
const img = require('../middlewares/img')

const { imgDetail, getImage } = require('../controllers/food-controller.js')

router.get('/', (req, res) => {
    res.send('food - alive')
})

//  test case all middlewares and creating image object in imgdetail
router.post('/image', img.multer.single('file'), img.sendUploadToGCS, imgDetail)

//  test case uploading to gcs
router.post('/image', img.multer.single('file'), img.sendUploadToGCS)

//  test case to imgdetail
// router.post('/image', imgDetail)

router.get('/image', getImage)

module.exports = router;
