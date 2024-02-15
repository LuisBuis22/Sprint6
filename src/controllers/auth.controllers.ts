import { Request, Response } from "express";
import Auth from "../helpers/auth";

export const register = async (req: Request, res: Response) => {
  try {
    
    let defValue = 'anon'
    let { name , password, id } = req.body;
   
    const date = new Date();
    if(!name){
      const player = new Auth( name=defValue,  password, id )
      
      
      const register = await player.register();
      
      res.status(201).json({
        password,
        name,
        date,
        jwt: register
      })
    }else{
      const player = new Auth( name,  password, id )
      
      
      const register = await player.register();
      
      res.status(201).json({
        password,
        name,
        date,
        jwt: register
      })
    }



  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: 'error 500 - Internal Server Error'
    })
  }
};

export const login = async(req: Request, res: Response) => {
  try {
  
  } catch (error) {
    res.status(500).json({
      msg: 'Error 500 - internal Server Error'
    })
  }
};
