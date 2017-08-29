import { Component, Input } from '@angular/core';

import { BayChartService } from './bayChart.service';
import * as Chartist from 'chartist';
import * as ChartistLegend from 'chartist-plugin-legend';
@Component({
  selector: 'bay-chart',
  templateUrl: './bayChart.html',
  styleUrls: ['./bayChart.scss'],
})

export class BayChart {

  bayStacked: any;

  bayStackedOptions: any;

  constructor(private _bayChartService: BayChartService) {
    const legendPlugin = new ChartistLegend()
  }

  ngOnInit() {

      this._bayChartService.getBayBarData().subscribe(d => {
        return this.bayStacked = {
          labels: d.map(l => l.regionId),
          series: [
            { 'name': 'empty', 'data': d.map(o => o.empty) },
            { 'name': 'open', 'data': d.map(o => o.open) },
            { 'name': 'confirmed', 'data': d.map(o => o.confirmed) }
          ],
        };
      });

      this.bayStackedOptions = {
        fullWidth: true,
        height: '300px',
        stackBars: true,
        plugins: [Chartist.plugins.legend({
          legendNames: ['empty', 'open', 'confirmed'],
          clickable: false,
        })],
        axisX: {
          showGrid: false
        },
        axisY: {
          labelInterpolationFnc: function (value) {
            return value * 100 + '%';
          }
        }
      };
  }
}
