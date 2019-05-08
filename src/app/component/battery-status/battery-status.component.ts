import {Component, OnInit} from '@angular/core';
import {Observer} from '../../observer/observer';
import {TelloConnector} from '../../connector/telloConnector';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.css']
})
export class BatteryStatusComponent implements OnInit, Observer {

  batteryLeftPercentage = 70;

  constructor(private telloConnector: TelloConnector) {
    telloConnector.attach(this);
  }

  ngOnInit() {
  }

  notify() {
    this.batteryLeftPercentage = this.telloConnector.telloDrone.batteryPercentage;
  }

}
