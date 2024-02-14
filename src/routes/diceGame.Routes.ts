import { Router } from "express";
import {
  playerRollDice,
  deleteGames,
  generalRanking,
  getBestPlayer,
  getWorstPlayer,
} from "../controllers/diceGame.controllers";

const router = Router();

router.post("/player/:id", playerRollDice);
router.get("/rank", generalRanking);
router.get('/best-player', getBestPlayer)
router.get('/worst-player',getWorstPlayer)
router.delete('/delete/:id',deleteGames)

export default router;
