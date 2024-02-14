import { IPlayer } from "../interfaces/IPlayer";
import { Player } from "../models/Player";


class updatePlayerName{
    private id: string;
    private name: string;
    
    constructor (id: string, name: string) {
        this.id = id,
        this.name = name
    }
    async updateName(){
        const update = {
            name: this.name
        }
        const player: IPlayer = await Player.findOneAndUpdate({_id: this.id}, update) as IPlayer
        return player
    }
}

export default updatePlayerName