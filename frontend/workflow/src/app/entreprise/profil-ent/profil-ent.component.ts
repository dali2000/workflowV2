import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-profil-ent',
  templateUrl: './profil-ent.component.html',
  styleUrls: ['./profil-ent.component.css']
})
export class ProfilEntComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  id: any
  entreprise: any
  data: any
  token: any
  user: any
  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);


    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
    this.getProfile()
  }
  getProfile() {
    this.http.get('http://localhost:3000/Enterprise/getEnterprise/' + this.id).subscribe(res => {
      this.entreprise = res
      console.log(res);
    });
  }
}


