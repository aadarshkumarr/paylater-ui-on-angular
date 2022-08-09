import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from "@angular/router";
import { ApplyCreditCardComponent } from '../apply-credit-card/apply-credit-card.component';


@Component({
  selector: 'app-manage-limit',
  templateUrl: './manage-limit.component.html',
  styleUrls: ['./manage-limit.component.css']
})
export class ManageLimitComponent implements OnInit {

  constructor(public service:AppService,public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }


  
  converToCreditCard(){

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

  openModal(modal){
    //alert('gdf')

    this.dialog.open(modal)

  }

}
