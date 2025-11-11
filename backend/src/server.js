import express from "express";
import { env } from "./libs/env.js";
import path from "path";
const app=express();
import connectDB from "./libs/db.js";
import cors from "cors";
import { inngest } from "./libs/injest.js";
import { serve  } from "inngest/express";
import { functions } from "./libs/injest.js";


app.use(express.json());
app.use(cors({origin:env.CLIENT_URL,credentials:true}));

app.use(express.urlencoded({ extended: true }));

app.use("/api/inngest" , serve({client:inngest,functions}))

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
    await  connectDB();
    app.listen(env.PORT,()=>{
        console.log(`Server is running on port ${env.PORT}`);
    })
}



startServer();