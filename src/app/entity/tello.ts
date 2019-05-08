/* tslint:disable:variable-name */
import {Subject} from '../observer/subject';

export class Tello {

  private _altitude: { pitch: number, roll: number, yaw: number };

  private _speed: { x: number, y: number, z: number };

  /**
   * Temperature in celcius degree
   */
  private _temperature: { lowest: number, highest: number };

  /**
   * Time of flight destince in cm
   * @todo research this  more
   */
  private _timeOfFlight: number;

  /**
   * Current height position
   */
  private _height: number;

  /**
   * Battery charge left in percentage
   */
  private _batteryPercentage: number;

  /**
   * barometer measurement in cm
   */
  private _barometer: number;

  private _motorTime: number;

  private _acceleration: {
    x: number,
    y: number,
    z: number
  };

  constructor(altitude: { pitch: number; roll: number; yaw: number },
              speed: { x: number; y: number; z: number },
              temperature: { lowest: number; highest: number },
              timeOfFlight: number,
              height: number,
              batteryPercentage: number,
              barometer: number,
              motorTime: number,
              acceleration: { x: number; y: number; z: number }) {
    this._altitude = altitude;
    this._speed = speed;
    this._temperature = temperature;
    this._timeOfFlight = timeOfFlight;
    this._height = height;
    this._batteryPercentage = batteryPercentage;
    this._barometer = barometer;
    this._motorTime = motorTime;
    this._acceleration = acceleration;
  }


  get altitude(): { pitch: number; roll: number; yaw: number } {
    return this._altitude;
  }

  get speed(): { x: number; y: number; z: number } {
    return this._speed;
  }

  get temperature(): { lowest: number; highest: number } {
    return this._temperature;
  }

  get timeOfFlight(): number {
    return this._timeOfFlight;
  }

  get height(): number {
    return this._height;
  }

  get batteryPercentage(): number {
    return this._batteryPercentage;
  }

  get barometer(): number {
    return this._barometer;
  }

  get motorTime(): number {
    return this._motorTime;
  }

  get acceleration(): { x: number; y: number; z: number } {
    return this._acceleration;
  }

}
