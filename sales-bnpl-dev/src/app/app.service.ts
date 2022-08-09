import { Injectable } from '@angular/core';
import { GatewayService } from './gateway.service';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private gatewayservice: GatewayService) { }

  journyInfo:any={
    mobileNumber:'',
    registrationType:'',
    pan:'',
    name:'',
    eligiblityWithKYCorWithoutKyc:'',
    commanHeader:'',
    incomeType:'',
    convertToCreditCard:false
  }

  public getcurrentDate(){
    var dtToday = new Date();

    var month:any = dtToday.getMonth() + 1;
    var day:any = dtToday.getDate();
    var year:any = dtToday.getFullYear();

    if(month < 10)
      month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    let maxDate = year + '-' + month + '-' + day;  
    return  maxDate
  }

  MULTIGST(){
    const bodyPlatware = {
      // LUGL00820190107132024
      // Lug1620200821190936
      SPGETLISTGSTMULTI: [{
        'X_OBJECT_PRI_KEY_1': 'LDSA_QA20211004121226',
        'X_OBJECT_PRI_KEY_2': '',
        'X_OBJECT_PRI_KEY_3':'',
      }]
    };
    const header = {
    };
return this.gatewayservice.callService(bodyPlatware,header);
  }



  Pan(){
    const bodyPlatware = {
      // LUGL00820190107132024
      // Lug1620200821190936
      PAN_Authentication: [{"pan":"BVZPS1846R"}]
    };
    const header = {
      "content-type":"application/json",
      "loginId":"nishant.dwivedi@decimal.co.in",
      "security-version":'2'
    };
return this.gatewayservice.callService(bodyPlatware,header);
  }

}
