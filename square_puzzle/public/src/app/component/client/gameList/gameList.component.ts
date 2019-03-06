import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { GameData } from 'src/app/interface/gameData';

@Component({
    selector: 'app-play',
    templateUrl: './gameList.component.html',
    styleUrls: ['./gameList.component.css']
})
export class GameListComponent implements OnInit {

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

/** Builds and returns a new Game. */
function createGame(object: object): GameData {
    return {
        level: object["level"],
        id: object["_id"],
        attemtped: object["attempted"],
        solved: object["solved"],
        best: object["best"],
        width: object["width"],
        height: object["height"],
        name: object["width"] + " by " + object["height"]
    }
}
