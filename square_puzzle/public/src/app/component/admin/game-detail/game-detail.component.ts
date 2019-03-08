import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/config/http.service';

@Component({
    selector: 'app-game-detail',
    templateUrl: './game-detail.component.html',
    styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
    newGame: any;
    public isNew = false
    public map = []

    @Input('newGame')
    set name(name: string) {
        // this.newG = name;
        // doSomeStuff();
        console.log("test")
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _httpService : HttpService) { }

    ngOnInit() {
        this.isNew = this._router.url.match(/new$/).length != 0
        this.newGame = { width: 1, height: 1, clicks: "" }
    }

    onSubmit() {
        let tempObservable = this._httpService.createGame({
            "width" : this.newGame.width,
            "height": this.newGame.height,
            "clicks": this.newGame.clicks
        })

        tempObservable.subscribe(data => {
            this._router.navigate(['/admin/gameList']);
        });
    }

    _alocation(width: number, height: number) {
        this.map = []
        for (var i = 0; i < height; i++) {
            var temp = []
            for (var j = 0; j < width; j++)
                temp.push(0)
            this.map.push(temp)
        }

        var clickList = this.newGame.clicks.split(",")
        for (var pos in clickList){
            if (clickList[pos] != "")
                this._autoClicks(clickList[pos])
        }
        // $("#body").height($(window).height() - $("#top").outerHeight() - $("#bottom").outerHeight() - 100)
        // this.rowHeight = $("#body").height() / this.HEIGHT + "px"
    }

    onButtonClick(pos) {
        var temp = this.newGame.clicks.split(",")
        if (temp.includes(pos.toString())) {
            temp = temp.reduce((arr, val) =>{
                if (val != pos)
                    arr.push(val)
                return arr
            }, [])


        } else {
            if (temp[0] === "") {
                temp[0] = pos
            } else {
                temp.push(pos)
            }
        }

        // temp
        this.newGame.clicks = temp.join(",")
    }

    _click(x, y) {
        this.map[y][x] = (this.map[y][x] == 0) ? 1 : 0
    }

    _autoClicks(pos) {
        var y = Math.floor(pos / this.newGame.width)
        var x = pos % this.newGame.width

        if (x + 1 < this.newGame.width)
            this._click(x + 1, y)

        // //check left
        if (x - 1 >= 0)
            this._click(x - 1, y)

        // //check down
        if (y + 1 < this.newGame.height)
            this._click(x, y + 1)

        // //check up
        if (y - 1 >= 0)
            this._click(x, y - 1)

        //click itself
        this._click(x, y)
    }

    isWidthInputValid() {
        this._alocation(this.newGame.width, this.newGame.height)
        return true
    }
}
