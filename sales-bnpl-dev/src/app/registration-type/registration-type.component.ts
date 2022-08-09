import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {AppService} from '../app.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-registration-type',
  templateUrl: './registration-type.component.html',
  styleUrls: ['./registration-type.component.css']
})
export class RegistrationTypeComponent implements OnInit {

  registration:FormGroup;
  registerType:any;
  constructor(private fb:FormBuilder,private service:AppService,private router: Router) { }

  ngOnInit(): void {

    this.registration=this.fb.group({
      'registraionType':['',[Validators.required]]
    })

    this.registration.get('registraionType').valueChanges.subscribe(res=>{
      this.registerType=res;
    })
  }

  registrationTypeSubmit(){

    //alert(this.registration.value.registraionType)registration-details  
    this.service.journyInfo.eligiblityWithKYCorWithoutKyc=this.registration.value.registraionType;
    this.router.navigate(['/eligibility'])
    

   
  }

}
