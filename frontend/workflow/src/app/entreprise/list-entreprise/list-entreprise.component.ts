import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  data:any
  token:any
  user:any
<<<<<<< HEAD
  term: any;
=======
>>>>>>> 55d8c613bf84d3ef6c8ecf78c8db7dcad883d3fb

  datedebut:any
  datefin:any
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);
    this.getEntreprises();
    this.nbjour();
  }
  Entreprises:any
  getEntreprises(){
    this.http.get('http://localhost:3000/enterprise/Enterprise').subscribe(res=>{
      console.log(res)
      this.Entreprises = res

    });
  }
  deleteEntreprise(id:any){
    this.http.delete('http://localhost:3000/enterprise/deleteEnterprise/'+id).subscribe(res=>{
      console.log(res)
      this.getEntreprises();
    });


  }
  nbjour(){

  }



}
