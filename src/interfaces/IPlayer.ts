export interface IPlayer {
  _id: string;
  password: string;
  name: string ;
  date: Date;
  totalGames: number;
  gamesWon: number;
  wonRate: number;
  playHistory: object[];
  save(): string;
}
