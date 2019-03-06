import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) {
    }

    getGames() {
        return this._http.get('/games');
    }

    getGame(id) {
        return this._http.get('/gameById/' + id);
    }

    solvedGame(id, clicks) {
        return this._http.get('/solvedById/' + id + "/" + clicks);
    }
}
