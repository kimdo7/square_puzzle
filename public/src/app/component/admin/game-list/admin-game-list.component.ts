import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PlatformLocation } from '@angular/common';
import { GameData } from 'src/app/interface/model/gameData';
import { GameDatas } from 'src/app/interface/controller/gameDatas';
import { Location } from "@angular/common";
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { HttpService } from 'src/app/service/config/http.service';

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


    constructor(
        private _httpService: HttpService,
        private location: PlatformLocation, private loc: Location, private router: Router) {

        this._getGames()

        router.events.subscribe( (event) => {

            if (event instanceof NavigationStart) {
                // Show loading indicator
                this._getGames()
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
                console.log(event.error);
            }
        });

    }

    _getGames() {
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