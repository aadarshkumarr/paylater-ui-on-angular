import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

declare var google

//import Plotly from 'plotly.js-dist'

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
 
  
 

  constructor() { }

  ngOnInit(): void {

    // VISUALIZATION API AND THE PIE CHART PACKAGE.
    google.charts.load("visualization", "1", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(DrawPieChart);

    function DrawPieChart() {
        // DEFINE AN ARRAY OF DATA.
        var arrSales =
        [
            ['usage', 'Diascove usage'],
            ['Food', 21],
            ['Entertainment', 56],
            ['Retail Shopping', 14],
            ['Fuel', 61],
           
        ];

        // SET CHART OPTIONS.
        var options = {
            title: 'Discover Usage',
            colors:['red','green','blue','orange'],
            pieHole: 0.6,
            legend:{
              position:'bottom',
              alignment:'center',
              maxLines:4,
              chartArea:{
               
               
              }
            }
        };

        var figures = google.visualization.arrayToDataTable(arrSales);

        // WHERE TO SHOW THE CHART (DIV ELEMENT).
        var chart = new google.visualization.PieChart(document.getElementById('chart'));

        // DRAW THE CHART.
        chart.draw(figures, options);
    }
    
    
  }

}
