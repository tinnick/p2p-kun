import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './components';

import { CookieComponent } from '../../shared/components/cookie/cookie.component'


@NgModule({
  declarations: [
    TopPageComponent,
    CookieComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
