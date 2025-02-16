import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const dbName = process.env.DB_NAME;

    const URL = `mongodb+srv://${username}:${password}@wp-clone.tb1pv.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=wp-clone`;

    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

export default Connection;