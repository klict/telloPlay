import {Component, OnInit} from '@angular/core';
import {Observer} from '../../observer/observer';
import {TelloConnector} from '../../connector/telloConnector';

@Component({
  selector: 'app-speed-gauge',
  templateUrl: './speed-gauge.component.html',
  styleUrls: ['./speed-gauge.component.css']
})
export class SpeedGaugeComponent implements OnInit, Observer {

  speed = 0;

  speedGaugeSettings = {
    type: 'full',
    value: 0,
    max: 100,
    label: 'speed',
    append: 'cm/s'
  };


  constructor(private telloConnector: TelloConnector) {
    telloConnector.attach(this);
  }

  ngOnInit() {
  }

  notify() {
    const speed = this.telloConnector.telloDrone.speed;

    this.speedGaugeSettings.value = speed.x ? speed.x : speed.y ? speed.y : speed.z;
  }

}
