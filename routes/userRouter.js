const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ตัวอย่าง route GET users
router.get('/', userController.getAllUsers);
router.get('/v1', userController.v1);

// ตัวอย่าง route POST users
router.post('/', userController.createUser);

module.exports = router;