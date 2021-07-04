import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
// import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private readonly router: Router, /*private readonly authService: AuthService*/) {}

  canLoad(): boolean {
      
    /* TODO: implement later.
    if (this.authService.currentuser) {
      return true;
    }
    */

    this.router.navigate(['login']);
    return false;
  }
  
}
