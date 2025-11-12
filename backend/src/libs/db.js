import mongoose from "mongoose";
import { env } from "./env.js";

const connectDB=async()=>{
    try{
        const  conn = await mongoose.connect(env.DB_URL);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
        return conn;  
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;