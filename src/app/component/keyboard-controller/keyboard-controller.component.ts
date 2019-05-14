import {Component, HostListener, OnInit} from '@angular/core';
import {TelloConnector} from '../../connector/telloConnector';


export enum KEY_CODE {
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  UP_ARROW = 38,
  LEFT_ARROW = 37,
  SPACEBAR = 32,
  W_KEY = 87,
  S_KEY = 83,
  A_KEY = 65,
  D_KEY = 68
}

@Component({
  selector: 'app-keyboard-controller',
  templateUrl: './keyboard-controller.component.html',
  styleUrls: ['./keyboard-controller.component.css']
})
export class KeyboardControllerComponent implements OnInit {

  constructor(
    private telloConnector: TelloConnector
  ) {
  }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const keyCode =  event.keyCode;


    switch (keyCode) {
      case KEY_CODE.UP_ARROW:
        this.moveForward();
        break;
      case KEY_CODE.DOWN_ARROW:
        this.moveBack();
        break;
      case KEY_CODE.LEFT_ARROW:
        this.moveLeft();
        break;
      case KEY_CODE.RIGHT_ARROW:
        this.moveRight();
        break;
      case KEY_CODE.W_KEY:
        this.moveUp();
        break;
      case KEY_CODE.S_KEY:
        this.moveDown();
        break;
      case KEY_CODE.A_KEY:
        this.turnLeft();
        break;
      case KEY_CODE.D_KEY:
        this.turnRight();
        break;
      case KEY_CODE.SPACEBAR:
        this.takeoffORLand();
        break;
    }
  }


  moveForward() {
    this.telloConnector.moveForward(50);
  }

  moveBack() {
    this.telloConnector.moveBack(50);
  }

  moveLeft() {
    this.telloConnector.moveLeft(50);
  }

  moveRight() {
    this.telloConnector.moveRight(50);
  }

  moveUp() {
    this.telloConnector.moveUp(20);
  }

  moveDown() {
    this.telloConnector.moveDown(20);
  }

  takeoffORLand() {
    this.telloConnector.telloDrone.timeOfFlight > 10 ?
      this.telloConnector.land() : this.telloConnector.takeOff();
  }

  turnLeft() {
    this.telloConnector.rotateCounterClockwise(90);
  }

  turnRight() {
    this.telloConnector.rotateClockwise(90);
  }
}
