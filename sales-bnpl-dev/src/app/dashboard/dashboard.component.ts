import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {AppService} from '../app.service';
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import { ApplyCreditCardComponent } from '../apply-credit-card/apply-credit-card.component';
import { OtpComponent } from '../otp/otp.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    // nav: false,
    autoplay:true,
    responsive: {
      0: {
        items: 4
      },
      767: {
        items: 4
      }
    },
    nav: true
  }
  constructor(public service:AppService,private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  manage(){

    this.router.navigate(['/dashboard/manage-limit'])

  }

  completeKyc(){

    this.router.navigate(['/kyc'])

  }
  converToCreditCard(dialogRef){

    if( this.service.journyInfo.eligiblityWithKYCorWithoutKyc!='With Limited KYC'){

      this.dialog.open(ApplyCreditCardComponent, {
        data: {
    
          operation:''
    
        },
        disableClose: true
      });


    }
    else{

      this.router.navigate(['/convert-to-credit-card'])


    }


  }

  acceptAndProceed(){

    this.service.journyInfo.convertToCreditCard=true;

  }

  redirectRouterLink(){

    this.router.navigate(['/linked-account'])

  }

  openOtp(){
   // alert('hjvbc')
    this.dialog.open(OtpComponent, {
      data: {},
      disableClose: true
    });
  }

}
