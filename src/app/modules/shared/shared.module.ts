import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { PimgComponent } from 'src/app/components/pimg/pimg.component';



@NgModule({
  declarations: [
    NavBarComponent,
    PimgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    PimgComponent
  ]
})
export class SharedModule { }
