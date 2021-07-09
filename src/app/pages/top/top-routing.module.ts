import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopPageComponent } from './components/top-page/top-page.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: ''
    component: TopPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRoutingModule { }
