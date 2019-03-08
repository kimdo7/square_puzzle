import { HttpClient } from '@angular/common/http';

export class GameHttpService {
    /** Builds and returns a new Game. */
    getGames(_http) {
        return _http.get('/games');
    }

    getGame(_http, id) {
        alert(id)
        return _http.get('/gameById/' + id);
    }

    solvedGame(_http, id, clicks) {
        return _http.get('/solvedById/' + id + "/" + clicks);
    }

    createGame(_http, game){
        return _http.post("/game", game)
    }
}