import mongoose from "mongoose";

const Connection = async () => {
    const username = "user"; // Replace with your MongoDB username
    const password = encodeURIComponent("pass@1234"); // URL encode the password
    const dbName = "wp-clone"; // Replace with your database name
    
    const URL = `mongodb+srv://${username}:${password}@wp-clone.tb1pv.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=wp-clone`;

    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true
            // useNewUrlParser: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

export default Connection;
