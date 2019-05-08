import {Adapter} from './adapter';
import {Tello} from '../entity/tello';
import {NgModule} from '@angular/core';

@NgModule()
export class TelloDroneDetailsAdapter implements Adapter<Tello> {

  adapt(item: any): Tello {
    return new Tello(
      {pitch: item.pitch, roll: item.roll, yaw: item.yaw},
      {x: item.x, y: item.y, z: item.z},
      {lowest: item.templ, highest: item.temph},
      item.tof,
      item.h,
      item.bat,
      item.baro,
      item.time,
      {z: item.agz, y: item.agy, x: item.agx}
    );
  }

}
