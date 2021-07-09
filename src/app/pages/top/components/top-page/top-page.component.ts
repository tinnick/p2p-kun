import { Component, OnInit } from '@angular/core';

import { GunService } from '@core/services';

@Component({
  selector: 'shul-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {
  cookieConfig = {
    name: 'denish',
    favorites: ['germany', 'america', 'japan']
  }
  
  public array = ['germany', 'america', 'japan'];

  constructor(/* private readonly gunService: GunService */) { }

  ngOnInit(): void {}

}
