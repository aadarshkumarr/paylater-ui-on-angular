import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    // nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      }
    },
    nav: true
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  redirect(){

    this.router.navigate(['/login'])

  }

}
