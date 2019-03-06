import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../service/http.service';

export interface GameData {
    id: string;
    attemtped: number;
    solved: number;
    best: number;
    width: number;
    height: number;
    name: string;
}

@Component({
    selector: 'app-play',
    templateUrl: './play.component.html',
    styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'attemtped', 'solved'];
    dataSource: MatTableDataSource<GameData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private _httpService: HttpService) {
        let tempObservable = _httpService.getGames()
        tempObservable.subscribe(data => {
            const games = data["data"].reduce((games, game) =>{
                games.push(createGame(game))
                return games
            }, [])
            
            this.dataSource = new MatTableDataSource(games);
        });
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

/** Builds and returns a new User. */
function createGame(object: object): GameData {
    return {
        id: object["_id"],
        attemtped: object["attempted"],
        solved: object["solved"],
        best: object["best"],
        width: object["width"],
        height: object["height"],
        name: object["width"] + " by " + object["height"]
    }
}
