const express = require('express');
const router = express.Router();
const authController = require('../../db/controllers/auth.controller');

// User sign-in
router.post('/signin', authController.signIn);

// User sign-out
router.get('/signout', authController.signOut); // Optional

module.exports = router;