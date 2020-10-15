import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hotel2PageRoutingModule } from './hotel2-routing.module';

import { Hotel2Page } from './hotel2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hotel2PageRoutingModule
  ],
  declarations: [Hotel2Page]
})
export class Hotel2PageModule {}
