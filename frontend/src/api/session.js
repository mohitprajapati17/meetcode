import axios from "axios";
import axiosInstance from "../lib/axios";

export const sessionApi ={
    createSession:async(data)=>{
        const result =await axiosInstance.post("/session",data);
        return result.data;
    },

    getActiveSessions:async()=>{
        const result =await axiosInstance.get("/session/active");
        return result.data;
    },

    getMyRecentSessions:async()=>{
        const response=await axiosInstance.get("/session/my-recent")
        return response.data;
    },
    getSessionsById:async(id)=>{
        const response =await axiosInstance.get(`/session/${id}`)
        return response.data;
    }
    ,
    joinSession:async(id)=>{
        const result=await axiosInstance.post(`/session/${id}/join`)
        return   result.data;
    }
    ,
    endSession:async(id)=>{
        const response=await axiosInstance.post(`/session/${id}/end`)
        return response.data;

    }
    ,
    getStreamToken:async()=>{
        const  response=await axiosInstance.get(`/chat/token`)
        return response.data;

    }



    
}