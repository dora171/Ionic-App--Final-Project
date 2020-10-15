import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapLocationsPage } from './map-locations.page';

const routes: Routes = [
  {
    path: '',
    component: MapLocationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapLocationsPageRoutingModule {}
