import { Component, OnInit } from '@angular/core';
import { StateService } from '../Shared/state.service';
import { IState } from '../Shared/state.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allStates : IState[];

  constructor(private _stateServce: StateService) { }

  ngOnInit() {
    this._stateServce.getStates()
    .subscribe((stateData) => this.allStates = _.uniqBy(stateData, 'state')
    
    );
  }

}
