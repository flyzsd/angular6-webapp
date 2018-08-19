import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    FancyCardComponent
  ],
  declarations: [FancyCardComponent]
})
export class AngularMaterialModule { }
