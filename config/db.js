const mongoose = require('mongoose');
require('dotenv').config(); 

const db = process.env.MONGODB_CONNECTION_STRING;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
        dbName: "appointEase",
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
    
        console.log('MongoDB is Connected...'.bgYellow.black);
    } catch (err) {
        console.error(err.message.bgRed.white);
        process.exit(1);
    }
    };

    module.exports = connectDB;