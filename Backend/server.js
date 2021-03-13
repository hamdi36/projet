const express = require ("express");
require('dotenv').config()
const connectDB = require ("./config/connectDB")

//2- connectDB
connectDB()
const app = express();
//4- parse data
app.use(express.json());
//3- routes
app.use("/api/doctor" , require("./Routes/doctors"));
app.use("/api/patient" , require("./Routes/patients"))
//1- run server
const port = 6000
app.listen(port , (err)=> err ? console.log("server error") : console.log("the server is connected"));