import express, { Application } from "express";
import config from "../config";
import routerGames from '../routes/diceGame.Routes'
import { connectDB } from "../db/config";
import routererror404 from "../routes/error404.routes";
import cors from 'cors'
import routerAuth from "../routes/auth.routes";
import routerPlayers from "../routes/players.routes";
class Server {
  private app: Application;
  private port: string;
  private path = {
    error404: '*',
    games: '/games',
    auth: '/auth',
    players: '/players'

  }

  constructor() {
    this.app = express();
    this.port = config.port as string;
    this.middlewares();
    this.routes();
    this.dbConnect();

  }

  middlewares(){
    this.app.use(express.json())
    this.app.use(cors())
  }
  async dbConnect(){
    await connectDB()
  }

  routes(){

    try {
      
      this.app.use(this.path.games, routerGames)
      this.app.use(this.path.auth, routerAuth)
      this.app.use(this.path.players, routerPlayers )
      this.app.use(this.path.error404, routererror404)
    }
    catch{
        console.log('ruta games not working')
    }

  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`lisntening on port ${this.port}`);
    });
  }
}
export default Server;
