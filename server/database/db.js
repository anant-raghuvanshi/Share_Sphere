// mongodb://mongoUserAnant:<password>@ac-n37eyww-shard-00-00.qv5jngj.mongodb.net:27017,ac-n37eyww-shard-00-01.qv5jngj.mongodb.net:27017,ac-n37eyww-shard-00-02.qv5jngj.mongodb.net:27017/?ssl=true&replicaSet=atlas-af7j2a-shard-0&authSource=admin&retryWrites=true&w=majority

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

 
   const MONGO_URI = `mongodb+srv://anant13:123454@cluster0.aqeqn8i.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;