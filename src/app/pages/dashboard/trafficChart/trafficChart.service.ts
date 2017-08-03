import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { Http, Response }          from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider, private http: Http) {
  }

  private commentsUrl = 'http://localhost:9000/fountain/v1/test-bay';


  /*getData(): Observable<Object[]> {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return Observable.of([
      {
        "value": 2000,
        "color": "#ffffff",
        "highlight": "#ffffff",
        "label": "Other",
        "percentage": 99,
        "order": 1
      }]);
  }*/


   getData(): Observable<Array<Object>> {
    let dashboardColors = this._baConfig.get().colors.dashboard;

    return this.http.get(this.commentsUrl)
    // ...and calling .json() on the response to return data
    .map((res:Response) => res.json())
    //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}
