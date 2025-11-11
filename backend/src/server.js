import express from "express";
import { env } from "./libs/env.js";
import path from "path";
const app=express();
import connectDB from "./libs/db.js";
import cors from "cors";

import { serve } from "inngest/express";
import { inngest } from "./libs/injest.js";
import { functions } from "./libs/injest.js";


app.use(express.json());
app.use(cors({origin:env.CLIENT_URL,credentials:true}));

app.use(express.urlencoded({ extended: true }));

app.use("/api/inngest" , serve({client:inngest,functions }))

const __dirname=path.resolve();
app.get("/home",(req,res)=>{
    res.send("Welcome to the home page");
});
// production

if(env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    });

}


const startServer=async()=>{
    try {
        await connectDB();
        app.listen(env.PORT,()=>{
            console.log(`Server is running on port ${env.PORT}`);
        })
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}



startServer();