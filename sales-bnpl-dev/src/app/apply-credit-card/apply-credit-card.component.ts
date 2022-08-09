import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-apply-credit-card',
  templateUrl: './apply-credit-card.component.html',
  styleUrls: ['./apply-credit-card.component.css']
})
export class ApplyCreditCardComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ApplyCreditCardComponent>, @Inject(MAT_DIALOG_DATA) public data,private matDialog: MatDialog,private router: Router,public service:AppService) { }

  ngOnInit(): void {
  }

  acceptAndProceed(){

   // alert(this.data.operation);
    //this.dialogRef.close();
    this.service.journyInfo.convertToCreditCard=true;
    if(this.data.operation!=''){
      this.router.navigate([`/${this.data.operation}`])
    }
  }

}
