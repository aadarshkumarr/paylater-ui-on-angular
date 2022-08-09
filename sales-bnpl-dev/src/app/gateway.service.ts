import { Injectable } from '@angular/core';
declare const APIGateway: any;
import { from } from 'rxjs';
import * as environment from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  private apiGateway: any;

  constructor() {
    this.apiGateway = new APIGateway();
    this.apiGateway.config(this.getConfiguration());
}

// Body Format For Dynamic Router:
body = {
  key:'value'
}
public callService(body, headers): any {
  return from(this.apiGateway.doPostWithoutParsing(environment, body, headers));
    }
  public callThroughDynamicRouter(body, headers, url): any {
  return from(this.apiGateway.doPostByUrl(environment, body, headers,url));
  }
 
private getConfiguration() {
 return {
     logging: false,           // Enable Logging in API GATEWAY
     serviceWorker: true,       //Enable Service Worker
     activeSWOnLocalHost: false, //Enable Service Worker on LocalHost
     encryption: true,          //Enable Encryption in Storage
     storage: 'localStorage',   //sessionStorage,localStorage,IndexDB
     networkDriver: 'FETCH'
      };

  }
}
