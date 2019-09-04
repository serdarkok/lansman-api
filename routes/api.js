const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.postNewUserController);

router.post('/login', userController.postLoginController);

router.get('/deleteAll', userController.deleteAllUserController);

router.post('/verifyToken', userController.verifyTokenController);

module.exports = router;