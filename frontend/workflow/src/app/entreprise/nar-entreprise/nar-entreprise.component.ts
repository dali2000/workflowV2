import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-nar-entreprise',
  templateUrl: './nar-entreprise.component.html',
  styleUrls: ['./nar-entreprise.component.css']
})
export class NarEntrepriseComponent implements OnInit {

  constructor(private router: Router) { }


  token :any;
  data :any;
  entreprise :any;
  
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.entreprise = this.data.user;
   
  }

 
  

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/LoginEntreprise'])
  }
}
