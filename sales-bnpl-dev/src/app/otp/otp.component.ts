import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FailureComponent} from '../failure/failure.component'
import { timer, Subscription } from "rxjs";
import {AppService} from '../app.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  matDialogRef: MatDialogRef<FailureComponent>;
  verifyDisabled:boolean=true;
  errorMsg:any='';

  resend_display:boolean;
  timerr:boolean;
  countDown: Subscription;
  counter:number;
  tick:number;
  otp:any
  @ViewChild('ngOtpInput') ngOtpInputRef:any;
  


  constructor(public dialogRef: MatDialogRef<OtpComponent>,private matDialog: MatDialog,private router: Router,public service:AppService) { }

  ngOnInit(): void {

    this.timer();
  }

  resendOtp(){

    this.timer();
    this.errorMsg='';
    this.ngOtpInputRef.setValue('')

  }

  onOtpChange(e:any){

    if(e.length==6){
      this.verifyDisabled=false;
      this.otp=e;
     // this.service.journyInfo.mobileNumber=e;
    }

  }

  relogin(){
    this.dialogRef.close();

  //  this.router.navigate(['/'])

  }

  acceptAndProceed(){

    this.dialogRef.close();

  }

  verify(dialog){

    
    if(this.otp=='123456'){

      this.dialogRef.close();
      this.router.navigate(['/register-type'])

    }
    else if(this.otp=='654321'){

      this.service.journyInfo.name='Vaibhav Choudhary'
      this.dialogRef.close();
      this.router.navigate(['/dashboard'])

    }
    else if(this.otp=='111222'){

      this.dialogRef.close();
      this.matDialog.open(FailureComponent, {
        data: {
         
        },
        disableClose: true
      });

    }
    else{

      this.errorMsg='Invalid OTP'

    }

    // this.matDialogRef = this.matDialog.open(FailureComponent, {
    //   data: {
    //     msg:'hello Rahul'
    //   },
    //   disableClose: true
    // });

  }

  timer(){
    //this.countDown.unsubscribe();
    this.counter = 60;
    this.tick = 1000;
    this.resend_display=false;
    this.timerr=true;
    this.countDown = timer(0, this.tick).subscribe(() => {
     --this.counter
    // this.subscribeTimer = Number(120) - val;
     // console.log(this.counter)
      if(this.counter==0){
       // alert('timeout')
       this.resend_display=true;
       this.timerr=false;
        this.countDown.unsubscribe();
      }
    });
  }

}
