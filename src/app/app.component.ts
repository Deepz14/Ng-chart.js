import { Component, OnInit } from '@angular/core';
// import { ChartType } from 'chart.js';
// import { MultiDataSet, Label } from 'ng2-charts';
import {Chart} from 'chart.js';

// tslint:disable-next-line:class-name
export interface chartModel{
  type: string;
  data: object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'charts';
  myChart: any;

  // get Random Data
  randomizeData = () => {
    return Math.round(Math.random() * 100);
  }

  config: chartModel = {
    type : 'pie',
    data : {
      labels : ['Red', 'Yellow', 'Blue', 'Orange', 'Green'],
      datasets: [{
        data : [
          this.randomizeData(),
          this.randomizeData(),
          this.randomizeData(),
          this.randomizeData(),
          this.randomizeData()
        ],
        backgroundColor : [
          'rgba(255, 0, 0, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(252, 111, 3, 0.7)',
          'rgba(31, 219, 119,0.7)'
        ]
      }]
    }
  };

  // pieChartLabels: Label[] = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
  // pieChartData: MultiDataSet = [
  //   [55, 25, 20, 45, 78]
  // ];
  // pieChartType: ChartType = 'pie';


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.myChart = new Chart('canvas', this.config);
  }

  randomData(): void{
    this.config.data.datasets.forEach((iteration) => {
      iteration.data = iteration.data.map(() => {
        return this.randomizeData();
      });
    });
    this.myChart.update();
  }

  addData(): void{
    const newDataset = {
      data : [
        this.randomizeData(),
        this.randomizeData(),
        this.randomizeData(),
        this.randomizeData(),
        this.randomizeData()
      ],
      backgroundColor : [
        'rgba(255, 0, 0, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(252, 111, 3, 0.7)',
        'rgba(31, 219, 119,0.7)'
      ]
    };
    this.config.data.datasets.push(newDataset);
    this.myChart.update();
  }

  resetData(): void{
    this.config.data.datasets.pop();
    this.myChart.update();
  }

}
