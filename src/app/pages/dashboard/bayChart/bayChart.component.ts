import { Component, Input } from '@angular/core';

import { BayChartService } from './bayChart.service';
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
  }

  ngOnInit() {

      this._bayChartService.getBayBarData().subscribe(d => {
        return this.bayStacked = {
          labels: d.map(l => l.regionId),
          series: [
            { 'name': 'Open', 'data': d.map(o => o.open) },
            { 'name': 'Empty', 'data': d.map(o => o.empty) },
            { 'name': 'Confirmed', 'data': d.map(o => o.confirmed) }
          ],
        };
      });

      this.bayStackedOptions = {
        fullWidth: true,
        height: '300px',
        stackBars: false,
        plugins: [new ChartistLegend()],
      };
  }
}
