import {Component, OnInit} from '@angular/core';
import {Observer} from '../../observer/observer';
import {TelloConnector} from '../../connector/telloConnector';

@Component({
  selector: 'app-altitude',
  templateUrl: './altitude.component.html',
  styleUrls: ['./altitude.component.css']
})
export class AltitudeComponent implements OnInit, Observer {

  height = 0;


  constructor(private telloConnector: TelloConnector) {
    telloConnector.attach(this);
  }

  ngOnInit() {
  }

  notify() {
    const telloDrone = this.telloConnector.telloDrone;
    // not sure if the barometer is used for altitude
    this.height = telloDrone.height;

  }

}
