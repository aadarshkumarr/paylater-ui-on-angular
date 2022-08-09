import { Component ,OnInit} from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {AppService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bnpl';

  constructor(private router: Router,private service:AppService){

    this.router.events.subscribe((event: Event) => {
     

      if (event instanceof NavigationEnd) {
          // Hide progress spinner or progress bar
         // this.currentRoute = event.url;          
        // console.log(event.url);
         if(event.url.includes('dashboard')){
           this.service.journyInfo.commanHeader=false
         }
         else{

          this.service.journyInfo.commanHeader=true

         }
      }
    })

  }

  ngOnInit(): void {
    this.router.navigate(['']);
  }
}
