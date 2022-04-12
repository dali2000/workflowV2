import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables} from 'chart.js';

;

@Component({
  selector: 'app-statestiqueadmin',
  templateUrl: './statestiqueadmin.component.html',
  styleUrls: ['./statestiqueadmin.component.css']
})
export class StatestiqueadminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { Chart.register(...registerables)}
 len =0
  data:any
  ngOnInit(): void {
    this.getAdmins()


  }
  getAdmins(){

    this.http.get("http://localhost:3000/user/getAdmins/admin").subscribe(res =>{
      console.log(res)
      this.data = res
      this.len = this.data.length
      console.log(this.len)
      const myChart = new Chart("myChartadmin", {
        type: 'bar',
        data: {
            labels: ['Admins', 'Entreprise', 'user'],
            datasets: [{
                label: 'utilisation',
                data: [this.len, 9, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    })
  }
}
