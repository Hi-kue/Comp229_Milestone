// Import the mongoose module
const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        // Attempt to connect to the MongoDB database using 
        //      the connection string stored in process.env.DB_CONNECTION
        // The options { useNewUrlParser: true, useUnifiedTopology: true } 
        //      are passed to avoid deprecation warnings
        await mongoose.connect(
            process.env.DB_CONN,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log('Connected to Mongo DB');
    } catch (error) {
        console.log('Could not connect to MongoDB: ', error);
        process.exit(1);
    }
};

module.exports = connectDb;