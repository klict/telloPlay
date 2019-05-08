import {Component, OnInit} from '@angular/core';
import {TelloConnector} from '../../connector/telloConnector';

@Component({
  selector: 'app-tello-controller',
  templateUrl: './tello-controller.page.html',
  styleUrls: ['./tello-controller.page.css']
})
export class TelloControllerPage implements OnInit {

  constructor(
    public telloConnection: TelloConnector
  ) {
  }

  ngOnInit() {
  }

}
