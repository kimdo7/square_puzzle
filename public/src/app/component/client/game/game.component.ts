import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as $ from 'jquery';
import { GameData } from 'src/app/interface/model/gameData';
import { GameDatas } from 'src/app/interface/controller/gameDatas';
import { HttpService } from 'src/app/service/config/http.service';
import { MatDialog } from '@angular/material';
import { GameWinningDialog } from './dialog/game-winning-dialog';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public WIDTH = 3
    public HEIGHT = 1
    public gameObj: GameData
    public map = []
    public rowHeight = ""
    public clicks = 0

    constructor(
        private _route: ActivatedRoute,
        private _httpService: HttpService,
        private _router: Router,
        public dialog: MatDialog) {
    }

    ngOnInit() {
        this.gameObj = GameDatas.createDefaultGame()
        this._route.params.subscribe((params: Params) => {
            this._getGame(params["id"])
        })
    }

    _getGame(id) {
        let tempObservable = this._httpService.getGame(id)
        tempObservable.subscribe(data => {
            this.gameObj = GameDatas.createGame(data["data"][0])
            this._alocation(this.gameObj.width, this.gameObj.height)
        });
    }

    _alocation(width: number, height: number) {
        this.WIDTH = width
        this.HEIGHT = height

        this.map = []
        this.clicks = 0
        for (var i = 0; i < this.HEIGHT; i++) {
            var temp = []
            for (var j = 0; j < this.WIDTH; j++)
                temp.push(0)
            this.map.push(temp)
        }

        var clickList = this.gameObj.clicks.split(",")
        for (var pos in clickList) {
            if (clickList[pos] != "")
                this._autoClicks(clickList[pos])
        }

        $("#body").height($(window).height() - $("#top").outerHeight() - $("#bottom").outerHeight() - 100)
        this.rowHeight = $("#body").height() / this.HEIGHT + "px"
    }

    _autoClicks(pos) {
        var y = Math.floor(pos / this.gameObj.width)
        var x = pos % this.gameObj.width

        if (x + 1 < this.gameObj.width)
            this._click(x + 1, y)

        // //check left
        if (x - 1 >= 0)
            this._click(x - 1, y)

        // //check down
        if (y + 1 < this.gameObj.height)
            this._click(x, y + 1)

        // //check up
        if (y - 1 >= 0)
            this._click(x, y - 1)

        //click itself
        this._click(x, y)
    }

    onButtonClick(pos) {
        if (this.isWining()) {
            return
        }
        var y = Math.floor(pos / this.WIDTH)
        var x = pos % this.WIDTH

        // //check right
        if (x + 1 < this.WIDTH)
            this._click(x + 1, y)

        // //check left
        if (x - 1 >= 0)
            this._click(x - 1, y)

        // //check down
        if (y + 1 < this.HEIGHT)
            this._click(x, y + 1)

        // //check up
        if (y - 1 >= 0)
            this._click(x, y - 1)

        //click itself
        this._click(x, y)

        this.clicks++

        if (this.isWining()) {
            // alert("Congrats, Let's move on the next challenge!!!")
            // $("#congrats_modal").click()
            this.openDialog()
            let tempObservable = this._httpService.solvedGame(this.gameObj.id, this.clicks)
            tempObservable.subscribe(data => {
                this.gameObj = GameDatas.createGame(data["data"][0])
            });
        }
    }

    _click(x, y) {
        this.map[y][x] = (this.map[y][x] == 0) ? 1 : 0
    }

    isWining() {
        return this.map.reduce((flag, temp) => {
            return (flag == true) ? temp.reduce((flag, temp) => {
                return (flag == true && temp == 1) ? true : false;
            }, flag) : false;
        }, true)
    }

    refreshPage() {
        this._getGame(this.gameObj.id)
    }

    next() {
        let tempObservable = this._httpService.nextGame(this.gameObj.level)
        tempObservable.subscribe(data => {
            if (data["message"] == "Success") {
                // alert(data["data"][0]["_id"])
                this._router.navigate(["/game", data["data"][0]["_id"]])
            }
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(GameWinningDialog, {
            width: '50%',
            data: { level: this.gameObj.level }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }

}
