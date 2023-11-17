import 'dotenv/config';
import express from 'express';
import connectDb from './src/db/config/config.mjs';
import { signIn, signOut } from './src/db/controllers/auth.controller.mjs';
import { createUser, listAllUsers, fetchUser, updateUser, deleteUser } from './src/db/controllers/student.controller.mjs';
import users from './src/db/models/student.model.mjs';
import authRouter from './src/routes/api/auth.routes.mjs';
import userRouter from './src/routes/api/users.routes.mjs'


const app = express();
connectDb();

app.use(express.json());
app.get('/wizsecret', (req, res) => {
    res.json({ message: "Wizstack Student Management App" });
});

app.get('/users', listAllUsers);

app.use('/api', userRouter);
app.use('/auth', authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});