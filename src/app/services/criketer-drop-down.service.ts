import { Injectable } from '@angular/core';
import { IPlayerType } from 'app/interface/player-type';
import { Http, RequestOptions, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CriketerDropDownService {

  private url: string = "assets/player.json";

  constructor(private http: Http) { }

  /** Get the player Type */
  getPlayerType() {
  let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
      return this.http.get('/assets/player.json')
               .map(res => res.json(),this.extractData)
               .catch(this.handleErrors)
  
  
  };
   private extractData(res: Response) {
    let body = res.json();
    return body || {};
  };
  private handleErrors(error: Response) {
    return Observable.throw(error);
  };
}
