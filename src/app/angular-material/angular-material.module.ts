import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FancyCardComponent} from './fancy-card/fancy-card.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FancyCardComponent
  ],
  declarations: [FancyCardComponent]
})
export class AngularMaterialModule {
}
