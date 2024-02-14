import { rollDices } from "./dices";
import { Player } from "../models/Player";
import { IPlayer } from "../interfaces/IPlayer";

class RollGame {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }
  async playerRollDice() {
    const game = rollDices();
    console.log(game, '1')
    const player = (await Player.findById({ _id: this.id })) as IPlayer;
    player.totalGames++;
    
    player.gamesWon = 0 
   
    
    if (game.veredict === "win") {
      player.gamesWon++ 
    }
    player.playHistory = []
    player.playHistory.push(game);
    player.save();

    return {
      id: player._id,
      name : player.name,
      totalGames : player.totalGames,
      gamesWon : player.gamesWon as number,
      wonRate: player.totalGames > 0 ? parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed(2)) : 0,
      playHistory: player.playHistory,
  }
  }
  static async generalRanking() {
    const players = await Player.find({}).sort({ wonRate: -1 });
    return players;
  }
  static async getBestPlayer() {
    const players = await Player.find({});
    let max = 0;
    players.forEach((pl) => {
      //retorna cada jugador a la vez k se sobreescribe
      pl.wonRate > max ? (max = pl.wonRate) : null;
    });
    const bestPlayer = await Player.findOne({ wonRate: max });
    return bestPlayer
  }
  static async getWorstPlayer() {
    const players = await Player.find({});
    let min = 100;
    players.forEach((player) => {
      player.wonRate < min ? (min = player.wonRate) : null;
    });
    
    const player = Player.findOne({ wonRate: min });
    return player
  }
  async deleteGames (){
    const player = await Player.findById({_id: this.id}) as IPlayer
    player.totalGames = 0 
    player.gamesWon = 0 
    player.wonRate = 0
    player.playHistory = []
    await player.save()
    return {
        id: player._id,
        name : player.name,
        totalGames : player.totalGames,
        gamesWon : player.gamesWon,
        wonRate: player.wonRate,
        playHistory: player.playHistory,
        
        
    }
  }
}
export default RollGame;
