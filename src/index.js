//require('dotenv').config({path:'./env'})
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:'./.env'
})
connectDB()
/*
import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express";
(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
       app.on("error",(error)=>{
        console.log("ERRR:",error);
      throw error
    })
       app.listen(process.env.PPORT,()=>{
          console.log(`App is listening on port ${process.env.PORT}`);
       })
    }
    catch{
        console.error("ERROR",error)
    }
})()*/