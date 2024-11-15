const express = require('express');
const { createUser, loginUser } = require('../controllers/userController'); // Controller functions

const router = express.Router();

// Signup route
router.post('/signup', createUser);

// Login route
router.post('/login', loginUser);

module.exports = router;
