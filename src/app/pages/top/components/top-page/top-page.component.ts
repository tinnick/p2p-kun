import { Component, OnInit } from '@angular/core';

import * as Gun from 'gun';
import { GunService } from 'src/app/core';

@Component({
  selector: 'shul-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  constructor(private readonly gunService: GunService) { }

  ngOnInit(): void {

  }

}
