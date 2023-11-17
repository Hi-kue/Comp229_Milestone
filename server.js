// creating a simple template for the server.js

require('dotenv').config();
const express = require('express');
const userRoutes = require('./src/routes/api/users.routes');
const authRoutes = require('./src/routes/api/auth.routes');
const app = express();

// the db connection
const connectDb = require('./src/db/config/config');
connectDb();

// we use json for the atlas
app.use(express.json());

// Define a route for the root directory ('/') to respond with a greeting message.
app.get('/', (req, res) => {
    res.json({ message: "Wizstack Student Management App" });
});

app.use('/api', userRoutes);
app.use('/auth', authRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
