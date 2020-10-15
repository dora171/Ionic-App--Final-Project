import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hotel3Page } from './hotel3.page';

const routes: Routes = [
  {
    path: '',
    component: Hotel3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hotel3PageRoutingModule {}
