import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/config/http.service';

@Component({
  selector: 'app-feeback',
  templateUrl: './feeback.component.html',
  styleUrls: ['./feeback.component.css']
})
export class FeebackComponent implements OnInit {

    public text = ""
  constructor(
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
      
  }

  save(){
    let observer = this._httpService.addFeedback(this.text)
    this._router.navigate([""])
  }

}
