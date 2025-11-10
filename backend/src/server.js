import express from "express";
import { env } from "./libs/env.js";
import path from "path";
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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



app.listen(env.PORT,()=>{
    console.log(`Server is running on port ${env.PORT}`);
});