import { Request, Response } from "express";
import GetPlayer from "../helpers/getPlayers";
import UpdatePlayerName from "../helpers/updatePlayerName";
import { Player } from "../models/Player";
export const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const getAllPlayers = await GetPlayer.getAllPlayers();
    res.status(201).json({
      getAllPlayers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "error 500 _ Internal Server Error",
    });
  }
};


export const updateName = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    const updatePlayerName = await new UpdatePlayerName(id, name);
    res.status(201).json({
      msg: "Player Updated",
      updatePlayerName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "error 500 _ Internal Server Error",
    });
  }
};
export const deletePlayers = async (req: Request, res: Response) => {
  try {
    const playerDelete = await Player.deleteMany({});
    res.status(200).json({
      msg: 'cero players',
      playerDelete
    })
    
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "error 400 _ wrong route",
    });
  }
};
