import { Injectable } from '@angular/core';

import * as Gun from 'gun';
import { IGunChainReference } from 'gun/types/chain';
// import { IUser } from '@models/user';


@Injectable()
export class GunService extends Gun {
  // public User: IGunChainReference;
  
  constructor() {
    super();
    // this.User = this.user();
    // this.User.recall({ sessionStorage: true });
  }

}
