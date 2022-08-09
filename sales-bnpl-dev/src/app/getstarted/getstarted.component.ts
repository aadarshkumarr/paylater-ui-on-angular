import { Component, OnInit, TemplateRef } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {

  openBottomSheet(bottom_sheet_ecom:TemplateRef<any>) {
    this.bottom_sheet.open(bottom_sheet_ecom);
  }

  constructor(private bottom_sheet: MatBottomSheet) {}

  ngOnInit(): void {
  }

}
