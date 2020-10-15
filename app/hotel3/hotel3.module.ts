import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hotel3PageRoutingModule } from './hotel3-routing.module';

import { Hotel3Page } from './hotel3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hotel3PageRoutingModule
  ],
  declarations: [Hotel3Page]
})
export class Hotel3PageModule {}
