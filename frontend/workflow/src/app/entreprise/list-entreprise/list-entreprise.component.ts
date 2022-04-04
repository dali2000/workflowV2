import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getEntreprises();
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

}
