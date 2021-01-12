import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { IonicModule } from '@ionic/angular';

import { GamejamPageRoutingModule } from './gamejam-routing.module';

import { GamejamPage } from './gamejam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamejamPageRoutingModule
  ],
  declarations: [
    GamejamPage,
    NavBarComponent
  ]
})
export class GamejamPageModule { }
