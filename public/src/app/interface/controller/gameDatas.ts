import { GameData } from '../model/gameData';

export class GameDatas {
    /** Builds and returns a new Game. */
    static createGame(object: object): GameData {
        return {
            level: object["level"],
            id: object["_id"],
            attemtped: object["attempted"],
            solved: object["solved"],
            best: object["best"],
            width: object["width"],
            height: object["height"],
            name: object["width"] + " by " + object["height"],
            clicks: object["clicks"]
        }
    }

    static createDefaultGame(): GameData {
        return {
            level: 0,
            id: "",
            attemtped: 0,
            solved: 0,
            best: 0,
            width: 0,
            height: 0,
            name: "",
            clicks: ""
        }
    }
}