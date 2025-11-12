import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { env } from "./env.js";

const apiKey=env.STREAM_API_KEY;
const apiSecret=env.STREAM_API_SECRET;


if(!apiKey || !apiSecret){
    throw new Error("STREAM_API_KEY and STREAM_API_SECRET are required");
}

export const  chatClient =new StreamChat(apiKey,apiSecret);  // for chat
export const  streamClient =new StreamClient(apiKey,apiSecret);  // for video calls

export const upStreamUser=async(userData)=>{
    try{
        await chatClient.upsertUser(userData);
        console.log(`User ${userData.id} updated successfully`);

    }catch(error){
        console.error("Error updating user:", error);
        throw error;
    }

}

export const deleteStreamUser=async(userId)=>{
    try{
        await chatClient.deleteUser(userId);
        console.log(`User ${userId} deleted successfully`);

    }
    catch(error){
        console.error("Error deleting user:", error);
        throw error;
    }
}