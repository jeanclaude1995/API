import express,{Request,Response} from "express";

import todomModel from "../models/todoModel";

let Router = express.Router();

Router.post('/', async(request: Request, response: Response) => {
    const { label, description } = request.body;

    let newTodo = new todomModel({label, description});
    try{
    let todo= await newTodo.save();
    response.status(200).json(todo);
    }catch(error){
    response.status(500).json(error);
    }
    return response.status(200).json({"msg": "Create todo page !"});
});

Router.get('/', (request: Request, response: Response) => {
    return response.status(200).json({"msg": "List  todo page !"});
    });

Router.get('/:todoId', async(request: Request, response: Response) => {
    let {todoId} = request.params;
    try{
        let todo= await todomModel.findById(todoId);
        response.status(200).json(todo);
        }catch(error){
        return response.status(500).json(error);
        }
});

Router.delete('/', (request: Request, response: Response) => {
    let {todoId} = request.params;
    return response.status(200).json({"msg": "The Delete" + todoId+ "todo page !"});
});


export default Router;