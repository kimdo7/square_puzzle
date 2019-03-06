import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';
import { HttpService } from 'src/app/service/http.service';
import { GameData } from 'src/app/interface/gameData';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public WIDTH = 3
    public HEIGHT = 1
    public gameObj: GameData = createDefaultGame()
    public map = []
    public rowHeight = ""
    public clicks = 0

    constructor(private _route: ActivatedRoute, private _httpService: HttpService) {
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this._getGame(params["id"])
        })
    }

    _getGame(id) {
        let tempObservable = this._httpService.getGame(id)
        tempObservable.subscribe(data => {
            this.gameObj = createGame(data["data"][0])
            this._alocation(this.gameObj.width, this.gameObj.height)
        });
    }

    _alocation(width: number, height: number) {
        this.WIDTH = width
        this.HEIGHT = height

        this.map = []
        for (var i = 0; i < this.HEIGHT; i++) {
            var temp = []
            for (var j = 0; j < this.WIDTH; j++)
                temp.push(0)
            this.map.push(temp)
        }

        $("#body").height($(window).height() - $("#top").outerHeight() - $("#bottom").outerHeight() - 100)
        this.rowHeight = $("#body").height() / this.HEIGHT + "px"
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
            alert("Congrats, Let's move on the next challenge!!!")
            let tempObservable = this._httpService.solvedGame(this.gameObj.id, this.clicks)
            tempObservable.subscribe(data => {
                this.gameObj = createGame(data["data"][0])
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
        // location.reload()
        this._getGame(this.gameObj.id)
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

function createDefaultGame(): GameData {
    return {
        level: 0,
        id: "",
        attemtped: 0,
        solved: 0,
        best: 0,
        width: 0,
        height: 0,
        name: ""
    }
}