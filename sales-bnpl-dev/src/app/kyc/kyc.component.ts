import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {AppService} from '../app.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html', 
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {

  kycForm:FormGroup;
  uploadAddressProof:any='';
  uploanPanFileName:any;
  uploadIncomeProof:any;
  incomeDoc:any;
  @ViewChild('congratulaion') test:ElementRef;

  constructor(private fb:FormBuilder,public service:AppService,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {

    if(this.service.journyInfo.incomeType=='Not Salaried'){

      this.incomeDoc='ITR'
    }

   else if(this.service.journyInfo.incomeType=='Salaried'){

    this.incomeDoc='Salary Slip'
      
    }

    this.kycForm=this.fb.group({
      'pan':[null,[Validators.required,Validators.maxLength(10),Validators.pattern(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/)]],
      'uploadPan':[null,[Validators.required]],
      'uploadKYCDocument':[null,[Validators.required]],
      'addressProof':[null,[Validators.required]],
      'incomeprooff':[null,[Validators.required]]
    })

    if(this.service.journyInfo.pan!=''){
      this.kycForm.get('pan').setValue(this.service.journyInfo.pan);
      this.kycForm.get('pan').disable();
      this.kycForm.get('pan').updateValueAndValidity() 
    }
  }
 
  kycSubmit(dialogRef){

    this.dialog.open(dialogRef)

  // this.router.navigate(['/dashboard'])
  }
  acceptAndProceed(){
    this.service.journyInfo.eligiblityWithKYCorWithoutKyc='With Full KYC'
    this.router.navigate(['/dashboard'])

  }
  fileChange(event,docType){
   
     let fileType = event.target.files[0].type;
     let  fileName = event.target.files[0].name;
    // alert(fileName)
    if(docType=='uploadPan'){

      this.kycForm.get('uploadPan').setValue(fileName);
      this.kycForm.get('uploadPan').updateValueAndValidity();
      this.uploanPanFileName=event.target.files[0].name;
    }
    else if(docType=='addressProof'){

      this.kycForm.get('uploadKYCDocument').setValue(fileName);
      this.kycForm.get('uploadKYCDocument').updateValueAndValidity();
      this.uploadAddressProof=event.target.files[0].name;

    }
    else if(docType=='uploadIncome'){

      this.kycForm.get('incomeprooff').setValue(fileName);
      this.kycForm.get('incomeprooff').updateValueAndValidity();
      this.uploadIncomeProof=event.target.files[0].name;

    }
  }

}
