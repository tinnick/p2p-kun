import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@core/guards';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('@pages/login/login.module').then(mod => mod.LoginModule)
},{
  path: '',
  // canLoad: [AuthGuard],
  loadChildren: () => import('@pages/top/top.module').then(mod => mod.TopModule)
},{
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
