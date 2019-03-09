import { Component, Inject } from '@angular/core';
import { HttpService } from 'src/app/service/config/http.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GameDialogData } from './game-dialog-data';

@Component({
    selector: 'game-winning-dialog',
    templateUrl: 'game-winning-dialog.html',
})
export class GameWinningDialog {

    constructor(
        private _httpService: HttpService,
        private _router: Router,
        public dialogRef: MatDialogRef<GameWinningDialog>,
        @Inject(MAT_DIALOG_DATA) public data: GameDialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    next(): void {
        this.dialogRef.close();
        let tempObservable = this._httpService.nextGame(this.data.level)
        tempObservable.subscribe(data => {
            if (data["message"] == "Success") {
                // alert(data["data"][0]["_id"])
                this._router.navigate(["/game", data["data"][0]["_id"]])
            }
        });
    }

}