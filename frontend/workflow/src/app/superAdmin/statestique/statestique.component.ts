import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statestique',
  templateUrl: './statestique.component.html',
  styleUrls: ['./statestique.component.css']
})
export class StatestiqueComponent implements OnInit {
  superadmin = {
    Firstname: 'boff',
    Lastname: 'ahmed',
    Email: '',


  }
  admins: any
  list :any=[];
  j = 0;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllAdmin()
  }
  getAllAdmin() {
    this.http.get('http://localhost:3000/user/users').subscribe(res => {
      this.admins = res;
      // console.log(res);
      for(let i=0;i<this.admins.length;i++){
        if(this.admins[i].role=="admin"){
          // console.log(this.admins[i])
          this.list[this.j]=this.admins[i]
          this.j++
        }
      }
      console.log(this.list)
    });

  }
}
