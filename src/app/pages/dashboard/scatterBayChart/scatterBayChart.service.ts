import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ScatterBayChart } from './ScatterBayChart';
import * as ChartistLegend from 'chartist-plugin-legend';

function toScatter(r: any[]): ScatterBayChart[] {
  return r.map( x => <ScatterBayChart>({
    x: x.first,
    y: Number.parseFloat(x.second),
  }));
}

@Injectable()
export class ScatterBayChartService {

  constructor(private http: Http) {
  }

  private baseUrl = 'http://localhost:8080/bay/v1';

  getBayScatterData(): Observable<ScatterBayChart[][]> {
    return this.http
      .get(`${this.baseUrl}/scatter`)
      .map(response => response.json().map(toScatter));
  }
}
