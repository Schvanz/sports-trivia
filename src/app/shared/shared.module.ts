import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabbableDirective } from './tabbable/tabbable.directive';



@NgModule({
  declarations: [
    TabbableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabbableDirective
  ]
})
export class SharedModule { }
