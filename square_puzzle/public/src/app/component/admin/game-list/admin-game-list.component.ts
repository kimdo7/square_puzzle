import { Component, OnInit, ViewChild } from '@angular/core';
import { GameData } from 'src/app/interface/gameData';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';

@Component({
    selector: 'app-game-list',
    templateUrl: './admin-game-list.component.html',
    styleUrls: ['./admin-game-list.component.css']
})
export class AdminGameListComponent implements OnInit {
    displayedColumns: string[] = ['name', 'attemtped', 'solved', 'best'];
    dataSource: MatTableDataSource<GameData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private _httpService: HttpService) {
        let tempObservable = this._httpService.getGames()
        tempObservable.subscribe(data => {
            const games = data["data"].reduce((games, game) => {
                games.push(createGame(game))
                return games
            }, [])

            this.dataSource = new MatTableDataSource(games);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    ngOnInit() {

    }

}

function createGame(object: object): GameData {
    return {
        level: object["number"],
        id: object["_id"],
        attemtped: object["attempted"],
        solved: object["solved"],
        best: object["best"],
        width: object["width"],
        height: object["height"],
        name: object["width"] + " by " + object["height"]
    }
}