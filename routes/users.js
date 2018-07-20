var express = require('express');
var router = express.Router();
const userController = require('../controllers/user-controller')

/* GET users listing. */
router
  .post('/register', userController.register)
  .post('/login', userController.logIn)
  .post('/update', userController.updateUser)
  .get('/findUser', userController.findOne);

module.exports = router;
