import { Request, Response } from "express"
export const error404 = ( req:Request, res: Response)=>{
    try {
        res.status(404).json({
            msg: 'Error 404 - handle it'
        })
    } catch (error) {   
        res.status(500).json({
            msg: 'Error 500 - handle it'
        })
    }
}