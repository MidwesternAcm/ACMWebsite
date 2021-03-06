import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GamejamPageRoutingModule } from './gamejam-routing.module';

import { GamejamPage } from './gamejam.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamejamPageRoutingModule,
    SharedModule
  ],
  declarations: [
    GamejamPage
  ]
})
export class GamejamPageModule { }
