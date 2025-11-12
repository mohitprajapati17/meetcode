import Session from "../models/Session.js";
import { streamClient } from "../libs/stream.js";
import { chatClient } from "../libs/stream.js";
async function createSession(req,res){
    try{
        const {problem, difficulty}=req.body;
        const userId=req.user._id;
        const clerkId=req.user.clerkId;

        if(!problem||!difficulty){
            return res.status(400).json({message:"Problem and difficulty are required"});
        }

        // generate a unique call id for stream video
        const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        // create session in   db
        const session =await Session.create({problem ,difficulty  , host:userId,callId});

        // create stream video call
        await streamClient.video.call("default",callId).getORCreate({
            data:{
                created_by_id:clerkId,
                custom:{problem , difficulty ,sessionId:session._id.toString()},
            },
        });

        // chat messaging 

        const channed =chatClient.channel("messaging",callId,{
            name:`${problem} Session`,
            created_by_id:clerkId,
            members:[clerkId],
        })

        await channed.create();

        res.status(201).json({session});

    }catch(error){
        console.error("Error creating session:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
async function getActiveSessions(req,res){
    try{
        const sessions=await Session.find({status:"active"})
        .populate("host","name profileImage email clerkId")
        .populate("participants","name profileImage email clerkId")
            .sort({createdAt:-1})
            .limit(20)
        res.status(200).json({sessions});

    }
    catch(error)
    {
        console.error("Error getting active sessions:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
async function getMyRecentSessions(req,res){

    try{
        const userId=req.user._id;

        // get sessions where user id  either host or participants

        const sessions =await Session.find({
            status:"completed",
            $or:[{host:userId},{participants:userId}],
        })
        .sort({createdAt:-1})
        .limit(20)

        res.status(200).json({sessions});
    }
    catch(error){
        console.error("Error getting my recent sessions:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
async function getSessionById(req,res){
    try{
        const {id}=ewq.user.id;
        const session =await  Session.findById(id)
        .populate("host","name profileImage email clerkId")
        .populate("participants","name profileImage email clerkId")
        if(!session){
            return res.status(404).json({message:"Session not found"});
        }
        res.status(200).json({session});
    }
    catch(error){
        console.error("Error getting session by id:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
async function joinSession(req,res){
    try{
        const {id}=req.params;
        const usedId=req.user._id;
        const clerkId=req.user.clerkId;
        const session =await Session.findById(id);
        if(!session){
            return res.status(404).json({message:"Session not found"});
        }

        if(session.status!="active"){
            return res.status(400).json({message:"Session is not active"});
        }

        if(session.host.toString()==usedId.toString()){
            return res.status(403).json({message:" Host cannot join their own session"});
        }
        
        // check if session id already full -has a participant 

        if(session.participant) return res.status(409).json({message:"Session is already full"});

        session.participant=usedId;
        await session.save();

       
        const channel=chatClient.channel("messaging",session.callId);

        await channel.addMembers([clerkId]);

        res.status(200).json({session});

        
        
    }
    catch(error){
        console.error("Error joining session:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
async function endSession(req,res){


    try{
        const {id}=req.params;
        const userId=req.user._id;

        const session =await Session.findById(id);

        if(!session){
            return res.status(404).json({message:"Session not found"});

        }

        //   check if user  is host 
        if(session.host.toString!==userId.toString()){
            return res.status(403).json({message:"only host can end session"});
        }

        // check if session is already ended
        if(session.status=="completed"){
            return res.status(400).json({message:"Session is already completed"});
        }

        // delete stream video call
        const call=streamClient.video.call("default",session.callId);
        await call.delete({hard:true});

        // delet stream chat  channel
        const channel  =chatClient.channel("messaging",session.callId);
        await channel.delete();

        session.status="completed";
        await session.save();

        res.status(200).json({message:"Session ended successfully"});
        
        
    }
    catch(error){
        console.error("Error ending session:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export {createSession,getActiveSessions,getMyRecentSessions,getSessionById,joinSession,endSession};