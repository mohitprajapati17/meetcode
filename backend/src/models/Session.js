import mongoose from "mongoose";

const sessionSchema =new mongoose.Schema({
    problem:{
        type:String,
        required:true,

    },
    difficulty:{
        type:String,
        enum:["Easy","Medium","Hard"],
        required:true,
    },
    host:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        enum:["active","completed"],
        default:"active",
    },
    //stream video call id
    callId:{
        type:String,
        required:true,
    }
    
},
{
    timestamps:true,
}

)

const Session =mongoose.model("Session",sessionSchema);

export default Session;