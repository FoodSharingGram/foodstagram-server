var express = require('express');
var router = express.Router();
const zomatoController = require('../controllers/zomato-controller')
const auth = require('../middleware/auth')

/* GET users listing. */
router
  .get('/search', auth, zomatoController.searchFood)
  .get('/reviews', auth, zomatoController.getReview);

module.exports = router;
