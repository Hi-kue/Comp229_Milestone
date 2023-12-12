"use strict";

import dotenv from "dotenv";
import process from "process";
import express from "express";
import cors from 'cors';
import connectDb from "./config/config.mjs";
import { HttpStatus } from "./util/dialogInvoke.mjs";
import path from 'path';
import { fileURLToPath } from 'url';

// import { signIn, signOut } from './src/db/controllers/auth.controller.mjs';
// import { createUser, listAllUsers, fetchUser, updateUser, deleteUser } from './src/db/controllers/student.controller.mjs';
// import users from './src/db/models/student.model.mjs';
// import authRouter from './src/routes/api/auth.routes.mjs';

import userRouter from "./routes/api/users.routes.mjs";
import authRouter from "./routes/api/auth.routes.mjs";

const app = express();
const httpStatus = new HttpStatus();
dotenv.config({ path: "./config.env" });
connectDb();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
/* app.use((req, res, next) => {
  console.log(req.headers);
}) */

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Wizstack Student Management App" });
// });

app.get("/wizsecret", (req, res) => {
  res.json({ message: "Wizstack Student Management App" });
});

app.use("/api", userRouter);
app.use("/api", authRouter);

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'index.html'));
});

app.listen(process.env.PORT, () => {
  httpStatus.showMessage(
    httpStatus.getStatusType(200),
    200,
    `Success! Server is running on port ${process.env.PORT}, http://localhost:${process.env.PORT}`
  );
});
