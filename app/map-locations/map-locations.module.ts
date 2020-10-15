import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapLocationsPageRoutingModule } from './map-locations-routing.module';

import { MapLocationsPage } from './map-locations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapLocationsPageRoutingModule
  ],
  declarations: [MapLocationsPage]
})
export class MapLocationsPageModule {}
