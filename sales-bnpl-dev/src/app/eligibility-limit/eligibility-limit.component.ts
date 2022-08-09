import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-eligibility-limit',
  templateUrl: './eligibility-limit.component.html',
  styleUrls: ['./eligibility-limit.component.css']
})
export class EligibilityLimitComponent implements OnInit {

  limit:any;
  eligibleLimit:FormGroup;
  limitWith:any;
  constructor(private fb:FormBuilder,public service:AppService,private router: Router) { 

    //this.limit='60,000'
  }

  ngOnInit(): void {
    this.eligibleLimit=this.fb.group({
      'limitWithKYCorWithoutKyc':[null,[Validators.required]]
    })

   // this.eligibleLimit.get('limitWithKYCorWithoutKyc').valueChanges.subscribe(res=>{
     // alert(res)
   //  this.limitWith=res;
     if(this.service.journyInfo.eligiblityWithKYCorWithoutKyc=='With Limited KYC'){

      this.limit='5,000'

     }
     else if(this.service.journyInfo.eligiblityWithKYCorWithoutKyc=='With Full KYC'){

      this.limit='60,000'
     }
    
   // })
  }

  eligibleLimitSubmit(){
    //eligiblityWithKYCorWithoutKyc
   // this.service.journyInfo.eligiblityWithKYCorWithoutKyc=this.eligibleLimit.value.limitWithKYCorWithoutKyc;

   // if(this.service.journyInfo.eligiblityWithKYCorWithoutKyc=='With KYC'){

    //  this.router.navigate(['/kyc'])

   // }
   // else  if(this.service.journyInfo.eligiblityWithKYCorWithoutKyc=='Without KYC'){

      this.router.navigate(['/dashboard'])

   // }

  }

}
