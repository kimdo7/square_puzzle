import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private _router: Router,
        private bottomSheet: MatBottomSheet) { }

    ngOnInit() {
        // this._router.navigate(["/login"])
    }

    shareToFriend() {
        this.bottomSheet.open(BottomSheetShareToFriend);
    }
}


@Component({
    selector: 'bottom-sheet-share-to-friend',
    templateUrl: 'bottom-sheet-share-to-friend.html',
})
export class BottomSheetShareToFriend {
    constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetShareToFriend>) { }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
