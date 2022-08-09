import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeFormatePipe } from './pipes/time-formate.pipe';



@NgModule({
  declarations: [
    TimeFormatePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[ TimeFormatePipe]
})
export class UtilityModule { }
