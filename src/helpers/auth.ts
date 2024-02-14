import { sign } from "jsonwebtoken";
import { Player } from "../models/Player";
import config from "../config";
import Encrypt from "./encryption";

class Auth {
  private name: string;
  private id: number|undefined;
  private date: Date | undefined;
  private password: string;

  constructor(password: string, name: string, id: number ) {
    
    this.name = name;
    this.id = id;
    this.date = new Date();
    this.password = password;
}
  
  async register() {
    
    const player = await new Player({
      name: this.name,
      id: this.id,
      date: this.date,
      password: await Encrypt.encryptPassword(this.password),
    });
    const savePlayer = await player.save();
    const jwt = sign({ id: player.id }, config.jwtPass as string);
    return jwt;
  }
  async login() {
    const playerDb = await Player.findOne({ id: this.id });
    if (!playerDb) {
      return "wrong Id!";
    }
    const validPass = await Encrypt.comparePassword(
      this.password,
      playerDb.password
    );
    if (!validPass) {
      return "Wrong password!";
    }
    const jwt = sign({ id: playerDb.id }, config.jwtPass as string);
    return jwt;
  }
}
export default Auth;
