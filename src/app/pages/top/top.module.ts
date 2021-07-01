import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './components/top-page/top-page.component';


@NgModule({
  declarations: [
    TopPageComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
