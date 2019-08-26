var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', verifyToken ,userController.userListController);

module.exports = router;