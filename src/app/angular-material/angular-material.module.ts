import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
  declarations: [FancyCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularMaterialModule {
}
