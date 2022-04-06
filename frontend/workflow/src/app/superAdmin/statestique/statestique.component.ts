import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statestique',
  templateUrl: './statestique.component.html',
  styleUrls: ['./statestique.component.css']
})
export class StatestiqueComponent implements OnInit {
  superadmin={
    Firstname:'boff',
    Lastname:'ahmed',
    Email:'',


  }
  constructor() { }

  ngOnInit(): void {
  }

}
