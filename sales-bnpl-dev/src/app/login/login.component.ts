import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {OtpComponent} from "../otp/otp.component";
import {AppService} from '../app.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  matDialogRef: MatDialogRef<OtpComponent>;
  loginForm:FormGroup;

  constructor(private fb: FormBuilder,public matDialog: MatDialog,private service:AppService) {
    this.loginForm=new FormGroup({})
  
   }

  ngOnInit(): void {
    this.loginForm=this.fb.group({

      'mobile':[this.service.journyInfo.mobile,{validators:[Validators.required,Validators.minLength(10),Validators.pattern(/^[6-9]{1}[0-9]+$/)]}],
      'termAndCondition':[false,[Validators.requiredTrue]]
    })
  }

  loginSubmit(){
   // alert('subit')
   this.loginForm.controls['mobile'].markAsTouched();
   this.loginForm.controls['termAndCondition'].markAsTouched()

   if(this.loginForm.invalid)
   return;
   this.service.journyInfo.mobileNumber=this.loginForm.value.mobile;
   this.matDialogRef = this.matDialog.open(OtpComponent, {
    data: {},
    disableClose: true
  });

  }

  

}
