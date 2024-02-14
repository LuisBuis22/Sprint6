import { Model } from "mongoose";
import { IPlayer } from "./IPlayer";

export interface IPlayerModel extends Model<IPlayer>{
    encryptPassword(password: string): string;
    comparePassword(password: string, receivedPassword: string): string;
} 