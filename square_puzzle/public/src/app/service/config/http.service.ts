import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {GameHttpService} from "./../controller/game/games"
import {GameHttpService} from "./../controller/game/games"

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    public games: GameHttpService

    constructor(private _http: HttpClient) {
        this.games = new GameHttpService()
    }


    addFeedback(text){
        this._http.post("/feedback", {
            "text": text
        })
    }

    getGames() {
        return this._http.get('/games');
        // this.games = new GameHttpService()
        // return this.games.getGames(this._http)
    }

    getGame(id) {
        return this._http.get('/gameById/' + id);
        // this.games = new GameHttpService()
        // return this.games.getGame(this._http, id)
    }

    solvedGame(id, clicks) {
        return this._http.get('/solvedById/' + id + "/" + clicks);
        // return this.games.solvedGame(this._http, id, clicks)
    }

    createGame(game){
        return this._http.post("/game", game)
        // return this.games.createGame(this._http, game)
    }
}
