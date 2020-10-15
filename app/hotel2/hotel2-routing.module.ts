import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hotel2Page } from './hotel2.page';

const routes: Routes = [
  {
    path: '',
    component: Hotel2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hotel2PageRoutingModule {}
