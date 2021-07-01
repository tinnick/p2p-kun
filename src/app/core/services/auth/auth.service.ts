import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GunService } from '../gun';

import { IGunCryptoKeyPair } from 'gun/types/types';


export declare interface IAuthErrorResponse {
  err: string;
}

export declare interface IAuthSuccessResponse {
  ack: 2;
  get: string;
  on: (...args: [unknown, unknown, unknown]) => unknown;
  put: {
    alias: string;
    auth: any;
    epub: string;
    pub: string;
  };
  sea: IGunCryptoKeyPair;
  soul: string;
};

export declare interface ICreateSuccessResponse {
  ok: 0;
  pub: string;
}

export declare interface ICreateErrorResponse {
  err: string;
}

@Injectable()
export class AuthService {
  // constructor(private readonly gunService: GunService) {}

  // public register(username: string, password: string): Observable<ICreateSuccessResponse> {
  //   return new Observable(subscriber => {
  //     const onRegister$ = (response: ICreateSuccessResponse | ICreateErrorResponse) => {
  //       let err = (response as ICreateErrorResponse).err;

  //       if (err) {
  //         subscriber.error(err);
  //         return;
  //       }

  //       subscriber.next(response as ICreateSuccessResponse);
  //       subscriber.complete();
  //     };

  //     this.gunService.User.create(username, password, onRegister$);
  //   });
  // }

  // public login(username: string, password: string): Observable<IAuthSuccessResponse> {
  //   return new Observable(subscriber => {
  //     const onLogin$ = (response: IAuthSuccessResponse | IAuthErrorResponse) => {
  //       let err = (response as IAuthErrorResponse).err;

  //       if (err) {
  //         subscriber.error(err);
  //         return;
  //       }

  //       subscriber.next(response as IAuthSuccessResponse);
  //       subscriber.complete();
  //     }

  //     this.gunService.User.auth(username, password, onLogin$);
  //   });
  // }

  // public userExists(username: string): Observable<boolean> {
  //   return new Observable(subscriber => {
  //     this.gunService.get(`~@${username}`).once(user => {
  //       subscriber.next(!!user);
  //       subscriber.complete();
  //     });
  //   })
  // }
}
