import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-linked-account',
  templateUrl: './linked-account.component.html',
  styleUrls: ['./linked-account.component.css']
})
export class LinkedAccountComponent implements OnInit {

  constructor(private modal:MatDialog) { }

  ngOnInit(): void {
  }

  openModal(modal){

    this.modal.open(modal)



  }

}
