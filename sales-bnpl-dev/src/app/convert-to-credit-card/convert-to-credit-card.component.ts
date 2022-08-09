import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {ApplyCreditCardComponent} from '../apply-credit-card/apply-credit-card.component'
  

@Component({
  selector: 'app-convert-to-credit-card',
  templateUrl: './convert-to-credit-card.component.html',
  styleUrls: ['./convert-to-credit-card.component.css']
})
export class ConvertToCreditCardComponent implements OnInit {
  documentType:any;
  creditCard:FormGroup
  uploadAadharProof:any;
  uploadIncomeProof:any;
  constructor(private service:AppService,private fb:FormBuilder,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {

    if(this.service.journyInfo.incomeType=='Not Salaried'){

      this.documentType='ITR'
    }

   else if(this.service.journyInfo.incomeType=='Salaried'){

    this.documentType='Salary Slip'
      
    }

this.creditCard=this.fb.group({

  'uploadaadhar':[null,[Validators.required]],
  'voterId':[null,[Validators.required]],
  'incomeProof':[null,[Validators.required]],
 // 'itr':[null,[Validators.requiredTrue]]

})

  }

  fileChange(event,docType){
   
    let fileType = event.target.files[0].type;
    let  fileName = event.target.files[0].name;
   // alert(fileName)
   if(docType=='uploadAadhar'){

     this.creditCard.get('uploadaadhar').setValue(fileName);
     this.creditCard.get('uploadaadhar').updateValueAndValidity();
     this.uploadAadharProof=event.target.files[0].name;
   }
   
   else if(docType=='uploadIncome'){
 
     this.creditCard.get('incomeProof').setValue(fileName);
     this.creditCard.get('incomeProof').updateValueAndValidity();
     this.uploadIncomeProof=event.target.files[0].name;

   }
 }

 creditCardSubmit(){
  //this.dialog.open(dialogRef)
  this.dialog.open(ApplyCreditCardComponent, {
    data: {

      operation:'dashboard'

    },
    disableClose: true
  });

 }

//  acceptAndProceed(){
//   this.service.journyInfo.convertToCreditCard=true;
//   this.router.navigate(['/dashboard'])
//  }

}
