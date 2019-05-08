import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePage} from './pages/home/home.page';
import {BatteryStatusComponent} from './component/battery-status/battery-status.component';
import {TelloConnector} from './connector/telloConnector';
import {WebsocketFactory} from './factory/websocket.factory';
import {SocketIoWebsocket} from './connector/websocket/socketIo.websocket';
import {TelloDroneDetailsAdapter} from './adapters/telloDroneDetails.adapter';
import {NgxGaugeModule} from 'ngx-gauge';
import { AltitudeComponent } from './component/altitude/altitude.component';
import { TelloControllerPage } from './pages/tello-controller/tello-controller.page';
import { SpeedGaugeComponent } from './component/speed-gauge/speed-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    BatteryStatusComponent,
    AltitudeComponent,
    TelloControllerPage,
    SpeedGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TelloConnector,
    WebsocketFactory,
    SocketIoWebsocket,
    TelloDroneDetailsAdapter,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
