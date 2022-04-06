import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  superadmin={
    Firstname:'boff',
    Lastname:'ahmed',
    Email:'',


  }

  constructor() { }

  ngOnInit(): void {
  }

  public check =true
  public toggle(){
    if(this.check==true){
      this.check=false
    }
    else{
      this.check=true
    }
  }
  
  logout(){
    localStorage.removeItem('token');
    //this.router.navigate(['/Login'])
  }
}
