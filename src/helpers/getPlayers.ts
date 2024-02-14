import { Player } from "../models/Player";

export class GetPlayer {
    
    private id: string;
    
    constructor(id: string){
        this.id = id ;
    }
    static async getAllPlayers(){
        
        const players = await Player.find({})
        const response = players.map(player=>{
            const obj = {
                id: player._id,
                name: player.name,
                wonRate: player.wonRate,
                date: player.date
            }
            return obj;
        })
        return response
    }
    async getOnePlayer(){
        const player = await Player.findById({_id: this.id})
        if(!player?._id) return false;
        return {
            name: player.name,
            matchHistory: player?.playHistory
        }
    }
    async getAndDelete(){
        const deletePlayer = await Player.findOneAndDelete({_id: this.id})
        return deletePlayer
    }
}
export default GetPlayer;