import {WebsocketWebsocket} from './websocket/websocket.websocket';
import {WebsocketFactory} from '../factory/websocket.factory';
import {NgModule} from '@angular/core';
import {Subject} from '../observer/subject';
import {Tello} from '../entity/tello';
import {TelloDroneDetailsAdapter} from '../adapters/telloDroneDetails.adapter';

@NgModule()
export class TelloConnector extends Subject {

  private connectionToTello: WebsocketWebsocket;
  private socketEvent = 'command';
  public telloDrone: Tello;

  constructor(
    private websocketFactpry: WebsocketFactory,
    private telloDroneAdapter: TelloDroneDetailsAdapter
  ) {
    super();
    this.connectionToTello = this.websocketFactpry.createNewConnection('localhost', 7000);

    this.connectionToTello.addListener('state', (data: string) => {
      this.telloDrone = this.telloDroneAdapter.adapt(JSON.parse(data));
      this.notifyAllAttachedObservers();
    });

  }

  get battery(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      /**
       * Sending battery command to retrieve latest state of battery
       */
      this.connectionToTello.sendMessage('battery?', this.socketEvent)
        .then(value => resolve(parseInt(value, 10)))
        .catch(reason => reject(reason));
    });
  }

  public takeOff(): Promise<boolean> {
    return this.sendActionCommand('takeoff');
  }

  public land(): Promise<boolean> {
    return this.sendActionCommand('land');
  }

  public emergency(): Promise<boolean> {
    return this.sendActionCommand('emergeny');
  }

  public moveUp(distance: number): Promise<boolean> {
    return this.sendActionCommand('up ' + distance);
  }

  public moveDown(distance: number): Promise<boolean> {
    return this.sendActionCommand('down ' + distance);
  }

  public moveLeft(distance: number): Promise<boolean> {
    return this.sendActionCommand('left ' + distance);
  }

  public moveRight(distance: number): Promise<boolean> {
    return this.sendActionCommand('right ' + distance);
  }

  public moveForward(distance: number): Promise<boolean> {
    return this.sendActionCommand('forward ' + distance);
  }

  public moveBack(distance: number): Promise<boolean> {
    return this.sendActionCommand('back ' + distance);
  }

  public rotateClockwise(degree: number): Promise<boolean> {
    return this.sendActionCommand('cw ' + degree);
  }

  public rotateCounterClockwise(degree: number): Promise<boolean> {
    return this.sendActionCommand('ccw ' + degree);
  }

  public flipLeft(): Promise<boolean> {
    return this.sendActionCommand('flip l');
  }

  public flipRight(): Promise<boolean> {
    return this.sendActionCommand('flip r');
  }

  public flipForward(): Promise<boolean> {
    return this.sendActionCommand('flip f');
  }

  public flipBack(): Promise<boolean> {
    return this.sendActionCommand('flip b');
  }

  /**
   * @todo  still need to be done
   * @param x
   * @param y
   * @param z
   * @param speed
   */
  public flyToXYZ(x: number, y: number, z: number, speed: number): Promise<boolean> {
    return null;
    //   return this.sendActionCommand('flip l');
  }


  public activateSdkMode(): Promise<boolean> {
    return this.sendActionCommand('command');
  }

  private sendActionCommand(command: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.connectionToTello.sendMessage(command, this.socketEvent)
        .then(value => resolve(this.responseToBoolean(value)))
        .catch(reason => reject(reason));
    });
  }

  private responseToBoolean(response: string): boolean {
    console.log(response);
    return response === 'ok';
  }
}
