require('dotenv').config();
//const express = require('express');
import express,{Request,Response} from "express";
import { exit } from "process";
import authRouter from "./routes/auth";
import todoRouter from "./routes/todo";

const morgan= require('morgan');
const helmet=require('helmet')
const mangoose=require('mongoose');
const app = express();

app.use(morgan('combined'));
app.use(helmet());
app.use(express.json());

mangoose.connect(`${process.env.MONGO_DB}`,{
        useNewUrlParser:true
  }, (error:any)=>{
        if(error){
            console.log(error);
        }
        else{
        console.log('Connected to database');
    }});


app.get('/', (request: Request, response: Response) => {
  response.status(200).send('Hello jean');
});

app.use('/auth',authRouter);
app.use('/todo',todoRouter);

app.listen(process.env.APP_PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.APP_PORT}`);
});