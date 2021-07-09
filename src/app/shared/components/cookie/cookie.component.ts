import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shul-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
  @Input() type: string = 'chocolate-chip';
  @Input() config: { name: string, favorites: string[] } = { name: 'hello', favorites: ['world'] };

  public get screenWidth(): string {
    return window.innerWidth > 400 ? 'family' : 'mobile';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
