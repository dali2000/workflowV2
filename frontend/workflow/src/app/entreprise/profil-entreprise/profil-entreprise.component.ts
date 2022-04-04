import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { }
  id :any 
  entreprise:any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
    this.getProfile()
  }
  getProfile(){
    this.http.get('http://localhost:3000/Enterprise/getEnterprise/'+this.id).subscribe(res => {
      this.entreprise = res
      console.log(res);
    });
  }
}
