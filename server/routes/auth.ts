import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userModel from "../models/userModel";


let Router = express.Router();

Router.post('/register', (request: Request, response: Response): Response => {
  console.log(request.body);
  const { email, email_cfg, password, password_cfg } = request.body;
  let newUser;
  if ((typeof email == 'string' && email != '') &&
      (typeof password == 'string' && password != '') &&
      (typeof email_cfg == 'string' && email_cfg != '') &&
      (typeof password_cfg == 'string' && password_cfg != '')
      ) {
        if (email != email_cfg || password != password_cfg) {
          return response.status(500).json({"msg": "Email or Password do not match."});
        }
        newUser = new userModel({email, password});
        newUser.save((error:any) => {
          if (error) {
            return response.status(500).json({"msg": "Failed to register." + error});
          }
        });
  } else {
    return response.status(500).json({"msg": "Email and Password are either missing or empty."});
  }
  return response.status(200).json(newUser);
});
Router.post('/login', (request: Request, response: Response): void => {
  console.log(request.body);
  const { email, password } = request.body;
  let user;
  if ((typeof email == 'string' && email != '') &&
      (typeof password == 'string' && password != '')) {
        // user.find({ email, password});
  } else {
    response.status(500).json({"msg": "Email and Password are either missing or empty."});
  }
  response.status(200).json("Login Page!");
});
export default Router;

