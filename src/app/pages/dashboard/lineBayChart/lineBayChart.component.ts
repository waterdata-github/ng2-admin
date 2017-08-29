import { Component } from '@angular/core';

import { LineBayChartService } from './lineBayChart.service';
import * as Chartist from 'chartist';
import * as ChartistLegend from 'chartist-plugin-legend';

@Component({
  selector: 'nga-line-bay-chart',
  templateUrl: './lineBayChart.html',
  styleUrls: ['./lineBayChart.scss'],
})

export class LineBayChartComponent {

  bayStacked: any;

  bayStackedOptions: any;

  constructor(private _bayChartService: LineBayChartService) {
    const legendPlugin = new ChartistLegend()
  }

  ngOnInit() {
    this.bayStackedOptions = {
      fullWidth: true,
      showArea: true,
      showPoint: false,
      showLine: false,
      height: '300px',
      plugins: [Chartist.plugins.legend({
        legendNames: ['empty', 'open', 'confirmed'],
        clickable: false,
      })],
      chartPadding: {
        right: 40,
      },
      axisX: {
       showGrid: false,
        labelInterpolationFnc: function (value, index, label) {
          return index % 3 === 0 ? value : "";
        }
      },
      axisY: {
        high: 1,
        low: 0,
        divisor: 4,
        labelInterpolationFnc: function (value) {
          return value * 100 + '%';
        }
      }
    };
    this._bayChartService.getBayLineData().subscribe(d => {
        const open = d.map(o => o.open)
        const empty = d.map(o => o.empty)
        const confirmed = d.map(o => o.confirmed)
        return this.bayStacked = {
          labels: d.map(l => l.date.substr(0, 10)),
          series: [
            { 'name': 'confirmed', 'data': confirmed },
            { 'name': 'open', 'data': open },
            { 'name': 'empty', 'data': empty }
          ],
        };

      });
  }
}
