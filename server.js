// const express=require("express")
// const dotenv=require("dotenv")
import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import bannerRoutes from './routes/bannerRoute.js'
import cors from "cors"
//env configuration
dotenv.config()


//object
const app=express();

//connection of database
connectDB();
//middleware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes)
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/banner", bannerRoutes);

//rest api
app.get("/",(req,res)=>{
res.send("<h1>Welcome</h1>");
})

const PORT=process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT} and mode is ${process.env.DEV_MODE}`)
})
