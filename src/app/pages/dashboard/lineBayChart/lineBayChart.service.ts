import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {LineBayChart} from './LineBayChart';


function toLineChart(r: any): LineBayChart {
  return <LineBayChart>({
    date: r.x,
    open: Number.parseFloat(r.open),
    empty: Number.parseFloat(r.empty),
    confirmed: Number.parseFloat(r.confirmed),
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
      .map(response => response.json().chartList.map(toLineChart))
  }

}
