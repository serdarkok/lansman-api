const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.postNewUserController);

router.post('/login', userController.postLoginController);

router.get('/deleteAll', userController.deleteAllUserController);

module.exports = router;