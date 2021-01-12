import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamejamPage } from './gamejam.page';

const routes: Routes = [
  {
    path: '',
    component: GamejamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamejamPageRoutingModule {}
