import express from "express";
import cors from "cors";
import Route from "./Routes/Routes.js";

import mongoose from "mongoose";
import bodyParser from "body-parser";


const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(Route)

mongoose.connect("mongodb://localhost:27017/Demo")

app.listen(5000, () => {
    console.log("server running");
})