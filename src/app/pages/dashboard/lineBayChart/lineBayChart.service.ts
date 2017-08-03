import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LineBayChart } from './LineBayChart';
import * as ChartistLegend from 'chartist-plugin-legend';

function toLineChart(r: any): LineBayChart {
  return <LineBayChart>({
    regionId: r.regionId,
    date: r.day,
    price: Number.parseFloat(r.price),
  });
}

@Injectable()
export class LineBayChartService {

  constructor(private http: Http) {
  }

  private baseUrl = 'http://localhost:8080/bay/v1';

  getBayLineData(): Observable<LineBayChart[]> {
    return this.http
      .get(`${this.baseUrl}/line`)
      .map(response => response.json().chartList.map(toLineChart));
  }

  static getLineOptions() {
    return {
        fullWidth: true,
      showArea: true,
      showPoint: false,
      showLine: false,
      height: '300px',
      plugins: [new ChartistLegend()],
      chartPadding: {
      right: 40,
    },
    };
  }
}
