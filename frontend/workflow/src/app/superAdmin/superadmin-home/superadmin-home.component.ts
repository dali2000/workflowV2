import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superadmin-home',
  templateUrl: './superadmin-home.component.html',
  styleUrls: ['./superadmin-home.component.css']
})
export class SuperadminHomeComponent implements OnInit {

  superadmin={
    Firstname:'boff',
    Lastname:'ahmed',
    Email:'',


  }
  constructor() { }

  ngOnInit(): void {
  }

}
