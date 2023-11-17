import express from 'express';
import { createUser, listAllUsers, fetchUser, updateUser, deleteUser } from '../../db/controllers/student.controller.mjs';

const userRouter = express.Router();

// <todo>
// basically created a template where you will do back-end routes here

// also here is /users but might be /students?
// Create a user
userRouter.post('/users', createUser);

// List all users
userRouter.get('/users', listAllUsers);

// Fetch a user by ID
userRouter.get('/users/:userId', fetchUser);

// Update a user
userRouter.put('/users/:userId', updateUser);

// Delete a user
userRouter.delete('/users/:userId', deleteUser);

export default userRouter;
