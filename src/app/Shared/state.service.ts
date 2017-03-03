import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IState } from './state.interface';

import 'rxjs/add/operator/map';


@Injectable()
export class StateService {

  private stateUrl: string = '../../api/state.json';

  constructor(private _http: Http) { }

  public getStates(): Observable<IState[]> {
    return this._http.get(this.stateUrl)
      .map((res: Response) => <IState[]>res.json())
  }

}
