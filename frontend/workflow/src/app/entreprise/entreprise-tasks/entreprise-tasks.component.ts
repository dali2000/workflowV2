import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-tasks',
  templateUrl: './entreprise-tasks.component.html',
  styleUrls: ['./entreprise-tasks.component.css']
})
export class EntrepriseTasksComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  tasks: any
  id: any
  term: any;
  term1 = {
    c :""
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      this.id = id

    });
    this.getTasks()
  }


  getTasks() {
    this.http.get("http://localhost:3000/task/getTasksEnterprise/" + this.id).subscribe(res => {
      this.tasks = res
    })
  }

  task ={
    valid :true,
    statut:"Completed"
  }
  task1 ={
    statut:"ReOpened"
  }
  validate(id: any) {

      this.http.put("http://localhost:3000/task/updateTask/"+id,this.task).subscribe(res => {
        console.log(res)
        this.ngOnInit()
      })

  }
  review(id: any){
    this.http.put("http://localhost:3000/task/updateTask/"+id,this.task1).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })

  }

  click(){
    this.term = this.term1
  }

}
