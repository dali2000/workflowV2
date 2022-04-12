
import { Component, OnInit } from '@angular/core';

import { Chart, registerables} from 'chart.js';

;

@Component({
  selector: 'app-statestiqueadmin',
  templateUrl: './statestiqueadmin.component.html',
  styleUrls: ['./statestiqueadmin.component.css']
})
export class StatestiqueadminComponent implements OnInit {

  constructor( ) { Chart.register(...registerables)}
  
 
  ngOnInit(): void {
   

    const myChart = new Chart("myChartadmin", {
      type: 'bar',
      data: {
          labels: ['Admins', 'Entreprise', 'user'],
          datasets: [{
              label: 'utilisation',
              data: [4, 9, 50],
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
  }
  

  
}
