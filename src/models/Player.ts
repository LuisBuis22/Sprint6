import { Schema, model } from "mongoose";
// en mysql hay k dividir en dos tabals esto
import { IPlayer } from "../interfaces/IPlayer";
import { IPlayerModel } from "../interfaces/IPlayerMethod";
import bcryptjs from 'bcryptjs'
const PlayerSchema = new Schema(
  {
    id: {
      type: Number,
      
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: String,
    totalGames: {
      type: Number,
      default: 0,
    },
    wonGames: {
      type: Number,
      default: 0,
    },
    wonRate: {
      type: Number,
      default: 0,
    },
    matchHistory: [Object],
  },
  {
    versionKey: false,
  }
);

PlayerSchema.static('encryptPassword',async(password: string)=>{
    console.log(password, ' pass')
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt)
})
PlayerSchema.static('comparePassword', async (password:string, receivedPassword: string)=>{
    return await bcryptjs.compare(password, receivedPassword)
})

export const Player = model<IPlayer, IPlayerModel>("Player", PlayerSchema);
