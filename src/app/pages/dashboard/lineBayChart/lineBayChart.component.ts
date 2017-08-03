import { Component } from '@angular/core';

import { LineBayChartService } from './lineBayChart.service';

@Component({
  selector: 'nga-line-bay-chart',
  templateUrl: './lineBayChart.html',
  styleUrls: ['./lineBayChart.scss'],
})

export class LineBayChartComponent {

  bayStacked: any;

  bayStackedOptions: any;

  constructor(private _bayChartService: LineBayChartService) {
  }

  ngOnInit() {
      this._bayChartService.getBayLineData().subscribe(d => {
        const mySet: Set<string> = new Set<string>();
        d.map(l => l.date).forEach(x => mySet.add(x));
        const label = [];
        mySet.forEach(x => label.push(x));
        return this.bayStacked = {
          labels: label,
          series: [
            { 'name': 'Turchia', 'data': d.filter(x => x.regionId === 'Turchia').map(o => o.price) },
            { 'name': 'Slovenia', 'data': d.filter(x => x.regionId === 'Slovenia').map(o => o.price) },
          ],
        };
      });

      this.bayStackedOptions = LineBayChartService.getLineOptions()
  }
}
