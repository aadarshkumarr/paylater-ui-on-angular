import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service'
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nav_open = false;
  
  constructor(public service:AppService,private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){

    this.router.navigate(['/'])

  }

}
