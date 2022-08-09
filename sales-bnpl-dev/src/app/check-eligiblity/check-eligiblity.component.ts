import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-check-eligiblity',
  templateUrl: './check-eligiblity.component.html',
  styleUrls: ['./check-eligiblity.component.css']
})
export class CheckEligiblityComponent implements OnInit {
  checkEligibilety:FormGroup;
  maxDate:any;
  incomeLabel:any;
  doYouHaveCrad:boolean=false;
  constructor(private fb:FormBuilder,public service:AppService,private router: Router) { }

  ngOnInit(): void {
   // this.getMultigst();
  // this.getPanName();
    this.maxDate=this.service.getcurrentDate();
    this.checkEligibilety=this.fb.group({
      'pan':[null,[Validators.required,Validators.maxLength(10),Validators.pattern(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/)]],
      'name':[null,[Validators.required]],
      'email':[null,[Validators.required,Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)]],
      'dob':[null,[Validators.required]],
      'gender':[null,[Validators.required]],
      'salaried':[null,[Validators.required]],
      'creditCard':[null,[Validators.required]],
      'income':[null,[Validators.required]],
      'bank':[null],
      'cardType':[null],
    })

    // if(this.service.journyInfo.registrationType=='Without PAN Card'){

    //   this.checkEligibilety.get('pan').disable();
    //   this.checkEligibilety.get('pan').updateValueAndValidity();

    // }

    this.checkEligibilety.get('salaried').valueChanges.subscribe(res=>{

      if(res=='Not Salaried'){
        this.incomeLabel='Annual income'

      }
      else if(res=='Salaried'){

        this.incomeLabel='Monthly income'

      }
      else{

        this.incomeLabel=''

      }

    })

    this.checkEligibilety.get('pan').valueChanges.subscribe(res=>{
      let pattern = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
      let Checkpattern=pattern.test(res);
      if(res.length==10 && Checkpattern){

        this.checkEligibilety.get('name').setValue('Nishant Dwivedi');
        this.checkEligibilety.get('name').disable();
        this.checkEligibilety.get('name').updateValueAndValidity();

      }
    })

    /**88888888888888888888888 service Call88888888888888888888888888888 */


        /**88888888888888888888888 service Call88888888888888888888888888888 */


        this.checkEligibilety.get('creditCard').valueChanges.subscribe(res=>{
          if(res=='yes'){

            this.doYouHaveCrad=true;
            this.checkEligibilety.get('bank').setValidators([Validators.required]);
            this.checkEligibilety.get('bank').updateValueAndValidity();
            this.checkEligibilety.get('cardType').setValidators([Validators.required]);
            this.checkEligibilety.get('cardType').updateValueAndValidity();


          }
          else if(res=='no'){

            this.doYouHaveCrad=false;
            this.checkEligibilety.get('bank').clearValidators();
            this.checkEligibilety.get('bank').updateValueAndValidity();
            this.checkEligibilety.get('cardType').clearValidators();
            this.checkEligibilety.get('cardType').updateValueAndValidity();


          }

        })

  }

  eligiblitySubmit(){

    //console.log(this.checkEligibilety.value)
    // if(this.service.journyInfo.registrationType=='Without PAN Card'){

    //   this.service.journyInfo.name=this.checkEligibilety.value.name;

    // }
    // else{

    //   this.service.journyInfo.pan=this.checkEligibilety.value.pan;
    //   this.service.journyInfo.name=this.checkEligibilety.getRawValue().name;

    // }
    this.service.journyInfo.incomeType=this.checkEligibilety.value.salaried

    this.service.journyInfo.pan=this.checkEligibilety.value.pan;
    this.service.journyInfo.name=this.checkEligibilety.getRawValue().name;
    if(this.service.journyInfo.eligiblityWithKYCorWithoutKyc=='With Full KYC'){

      this.router.navigate(['/kyc'])

    }
    else if(this.service.journyInfo.eligiblityWithKYCorWithoutKyc=='With Limited KYC'){

      this.router.navigate(['/eligibility-limit'])
      
    }

  }

  getMultigst() {
   // this.loaderService.showLoader();
    const that = this;
    this.service.MULTIGST().subscribe((r)=>{
      if (r.status) {
          //  that.loaderService.hideLoader();
            // tslint:disable-next-line:max-line-length
            if (r.data['SPGETLISTGSTMULTI'][0].hasOwnProperty('data')) {
            //  that.multigstData= JSON.parse(r.data['SPGETLISTGSTMULTI'][0]['data'][0].OBJECT);
            } else if (r.data['SPGETLISTGSTMULTI'][0].hasOwnProperty('error')) {
   
//that.loaderService.hideLoader();
             // that.notifyService.showToast(r.data['SPGETLISTGSTMULTI'][0].error.message, 'error');
            } else {
             // that.notifyService.showToast('Something went wrong', 'error');
            }
      
          } else {
           // that.loaderService.hideLoader();
          //  that.notifyService.showToast('Please check your network connectivity.', 'error');
          }
      
          },error=>{
      console.log(error);
          })
   }

   getPanName() {
    // this.loaderService.showLoader();
     const that = this;
     this.service.Pan().subscribe((r)=>{
      
           },error=>{
       console.log(error);
           })
    }

}
