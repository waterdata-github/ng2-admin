import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaThemeConfigProvider } from '../../../theme';
import { BayChart } from './bayChart';

function mapBarChart(response: Response): BayChart[] {
  return response.json().chartList.map(toBarChart);
}


function toBarChart(r: any): BayChart {
  return <BayChart>({
    regionId: r.regionId,
    open: Number.parseFloat(r.open),
    empty: Number.parseFloat(r.empty),
    confirmed: Number.parseFloat(r.confirmed),
  });
}

@Injectable()
export class BayChartService {

  constructor(private _baConfig: BaThemeConfigProvider, private http: Http) {
  }

  private baseUrl = 'http://localhost:8080/bay/v1';

  getBayBarData(): Observable<BayChart[]> {
    return this.http
      .get(`${this.baseUrl}/bar`)
      .map(mapBarChart);
  }
}
