import mongoose from "mongoose";
import { env } from "./env.js";

const connectDB=async()=>{
    try{
        if(!env.DB_URL){
            throw new Error("DB_URL is not defined in environment variables. Please check your .env file.");
        }
        
        const  conn=await mongoose.connect(env.DB_URL);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
        return conn;  
    } catch (error) {
        console.error("Database connection error:");
        if(error.message.includes("DB_URL")){
            console.error(error.message);
        } else if(error.message.includes("authentication failed") || error.code === 8000){
            console.error("MongoDB Authentication Failed!");
            console.error("Please check:");
            console.error("1. Your MongoDB Atlas username and password are correct");
            console.error("2. Your password doesn't contain special characters that need URL encoding");
            console.error("3. Your connection string format: mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?retryWrites=true&w=majority");
            console.error("4. Your IP address is whitelisted in MongoDB Atlas Network Access");
            console.error("5. Your database user has the correct permissions");
        } else {
            console.error(error.message || error);
        }
        process.exit(1);
    }
}

export default connectDB;