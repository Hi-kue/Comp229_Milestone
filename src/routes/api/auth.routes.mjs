import express from 'express';
import { signIn, signOut } from '../../db/controllers/auth.controller.mjs';

const authRouter = express.Router();

// User sign-in
authRouter.post('/auth/signin', signIn);

// User sign-out
authRouter.get('/auth/signout', signOut); // Optional

export default authRouter;