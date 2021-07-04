import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GunService, AuthService } from './services';
import { AuthGuard } from './guards';

const SERVICES: any[] = [
  GunService,
  AuthService
];

const GUARDS: any[] = [
  AuthGuard
];

@NgModule({
  declarations: [],
  providers: [
    ...SERVICES,
    ...GUARDS
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
