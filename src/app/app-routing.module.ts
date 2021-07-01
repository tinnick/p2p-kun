import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  loadChildren: () => import('@pages/login/login.module').then(mod => mod.LoginModule)
},{
  path: '',
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
