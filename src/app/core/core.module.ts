import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GunService, AuthService } from './services';

const SERVICES: any[] = [
  GunService,
  AuthService
];

@NgModule({
  declarations: [],
  providers: [...SERVICES],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
