const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ตัวอย่าง route GET users
router.get('/login', userController.getUserById);


// ตัวอย่าง route POST users
router.post('/register', userController.createUser);

module.exports = router;