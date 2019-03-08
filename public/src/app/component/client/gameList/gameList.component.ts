import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GameData } from 'src/app/interface/model/gameData';
import { GameDatas } from 'src/app/interface/controller/gameDatas';
import { HttpService } from 'src/app/service/config/http.service';

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
                games.push(GameDatas.createGame(game))
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