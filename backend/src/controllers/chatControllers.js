import { chatClient } from "../libs/stream.js";

export async function getStreamToken(req,res){
     try{
        const token =chatClient.createToken(req.user.clerkId);
        res.json({
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.profileImage,

        });
     }catch(error){
        res.status(500).json({message:"Internal server error"});
     }
}