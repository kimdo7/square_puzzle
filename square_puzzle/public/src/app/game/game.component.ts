import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public WIDTH = 3
    public HEIGHT = 1
    public map = []
    public rowHeight = ""
    public clicks = 0

    constructor(private _route: ActivatedRoute, ) {
    }

    ngOnInit() {
        var height = 5
        this._route.params.subscribe((params: Params) => {
            this.WIDTH = params["width"]
            this.HEIGHT = params["height"]
            // this.ratio = this.WIDTH + ":" + this.HEIGHT
            height = this.HEIGHT
            for (var i = 0; i < this.HEIGHT; i++) {
                var temp = []
                for (var j = 0; j < this.WIDTH; j++) {
                    temp.push(0)
                }
                this.map.push(temp)
            }

            $("#body").height($(window).height() - $("#top").outerHeight() - $("#bottom").outerHeight() - 100)
            this.rowHeight = $("#body").height() / this.HEIGHT + "px"
            console.log(this.rowHeight)
        })

        
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
        
        if (this.isWining()) 
            alert("Yayyyyy")
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
        location.reload()
    }

}
