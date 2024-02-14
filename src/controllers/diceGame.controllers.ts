import { Request, Response } from "express";
import RollGame from "../helpers/diceGame";

export const playerRollDice = async (req: Request, res: Response)=>{
    try {
        const id = req.params.id
        
        const game = new RollGame(id)
        
        const playerRollDices = await game.playerRollDice()
        res.status(201).json({
            playerRollDices
        }) 
        
    } catch (error) {
        res.status(400).json({
            msg: `the id isn'tsss valid`
        })
    }
}
export const generalRanking =async (req: Request, res: Response)=>{
    try {
        const ranking = await RollGame.generalRanking()
        res.status(201).json({
            ranking
        })
    } catch (error) {
        res.status(500).json({
            msg:'error'
        })
    }
}

export const getBestPlayer = async (req: Request, res: Response) =>{
    try {
        const bestPlayer = await RollGame.getBestPlayer()
        res.status(201).json({
            bestPlayer
        })
    } catch (error) {
        res.status(500).json({
            msg:'error'
        })
    }
}
export const getWorstPlayer = async (req: Request, res: Response) =>{
    try {
        const worstPlayer = await RollGame.getWorstPlayer()
            res.status(201).json({
                worstPlayer
            })

    } catch (error) {
        res.status(500).json({
            msg:'error'
        })
    }
}
export const deleteGames = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id;
        const player = await new RollGame(id)
        const deleteGames = player.deleteGames()
        res.status(201).json({
            deleteGames,
            msg: 'player games deleted succesfully'
        })
    } catch (error) {
        res.status(500).json({
            msg:'error'
        })
    }
}