const express = require('express');
const router = express.Router();

// I used userController because that was the requirement in the document
// but it can also be userController and in db it can be user.controller.js
const userController = require('./../../db/controllers/student.controller');

// <todo>
// basically created a template where you will do back-end routes here

// also here is /users but might be /students?
// Create a user
router.post('/users', userController.createUser);

// List all users
router.get('/users', userController.listAllUsers);

// Fetch a user by ID
router.get('/users/:userId', userController.fetchUser);

// Update a user
router.put('/users/:userId', userController.updateUser);

// Delete a user
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
