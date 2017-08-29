import {Component} from '@angular/core';

import {ScatterBayChartService} from './scatterBayChart.service';

@Component({
  selector: 'nga-scatter-bay-chart',
  templateUrl: './scatterBayChart.html',
  styleUrls: ['./scatterBayChart.scss'],
})

export class ScatterBayChartComponent {

  chart: any;

  chartOptions: any;

  constructor(private _bayChartService: ScatterBayChartService) {
  }

  ngOnInit() {
    this._bayChartService.getBayScatterData().subscribe(data => {
      return this.chart = {
        labels: data[0].map(el => el.x),
        series: data,
      };
    });

    this.chartOptions = {
      fullWidth: true,
      showArea: false,
      showPoint: true,
      showLine: false,
      axisX: {showGrid: false},
      axisY: {
        labelInterpolationFnc: function (value) {
          return value + '€';
        }
      },
        height: '300px',
        chartPadding: {
          right: 40,
        },
      };
  }
  }
