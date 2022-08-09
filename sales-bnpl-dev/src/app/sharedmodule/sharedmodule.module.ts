import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from "@angular/material/card";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     // Angular materials modules
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatNativeDateModule
  ],
  exports:[
 // Angular materials modules
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class SharedmoduleModule { }
