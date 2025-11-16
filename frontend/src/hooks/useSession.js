import { useMutation, useQuery } from "@tanstack/react-query";
import { sessionApi } from "../api/session";
import toast from "react-hot-toast";

export const  useCreateSession=()=>{
    const result=useMutation({
        mutationKey:["createsession"],

        mutationFn:sessionApi.createSession,
        onSuccess:()=>toast.success("session created successfull"),
        onError:(error)=>toast.error(error.response?.data?.message|| "failed to create room")
    });
    return   result;
}

export const  useActiveSessions=()=>{
    const  result =useQuery({
        queryKey:["activeSessions"],
        queryFn:sessionApi.getActiveSessions,


    })
    return result;
}

export const useMyRecentSessions=()=>{
    const result =useQuery({
        queryKey:["myRecentSessions"],
        queryFn:sessionApi.getMyRecentSessions

    })
    return result;
}

export const useSessionById=(id)=>{
    const result =useQuery({
        queryKey:["session",id],
        queryFn:()=>sessionApi.getSessionsById(id),
        enabled: !!id,
        refetchInterval:5000,
        
    })
    return result;
}

export const useJoinSession=(id)=>{
    const result =useMutation({
        mutationKey:["joinSession"],
        mutationFn:sessionApi.joinSession,
        onSuccess:()=>toast.success("joined stream succesfully"),
        onError:(error)=>toast.error(error.response?.data?.message||"Failed to  join session"),
    })
    return result;
}

export const useEndSession=(id)=>{
    const result =useMutation({
        mutationKey:["endSession"],
        mutationFn:sessionApi.endSession,
        onSuccess: () => toast.success("Session ended successfully!"),
        onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
    })
    return result;
}