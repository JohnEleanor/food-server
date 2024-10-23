const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ตัวอย่าง route GET users
router.get('/', userController.getAllUsers);


// ตัวอย่าง route POST users
router.post('/', userController.createUser);

module.exports = router;