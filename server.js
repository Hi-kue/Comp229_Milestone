// creating a simple template for the server.js

const express = require('express');
const userRoutes = require('./src/routes/api/users.routes');
const authRoutes = require('./src/routes/api/auth.routes');
const app = express();

// we use json for the atlas
app.use(express.json());

app.use('/api', userRoutes);
app.use('/auth', authRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
