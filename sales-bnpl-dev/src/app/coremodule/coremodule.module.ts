import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedmoduleModule} from '../sharedmodule/sharedmodule.module'
import {UtilityModule} from '../utility/utility.module'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedmoduleModule,
    UtilityModule
  ],
  exports:[

    SharedmoduleModule,
    UtilityModule

  ]
})
export class CoremoduleModule { }
