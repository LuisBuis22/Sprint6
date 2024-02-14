import { Router } from "express";
import { deletePlayers, getAllPlayers,  updateName } from "../controllers/players.controllers";

const router = Router();
router.get('/get-all-players',getAllPlayers)
router.put('/update-player/:id',updateName)
router.delete('/delete-players', deletePlayers)
export default router