import {SocketIoWebsocket} from '../connector/websocket/socketIo.websocket';
import {NgModule} from '@angular/core';

@NgModule()
export class WebsocketFactory {


  constructor(
    private nodeUdpConnection: SocketIoWebsocket
  ) {

  }

  createNewConnection(ipAddress: string, port: number) {
    /**
     * @todo replace this code using injector
     */
    this.nodeUdpConnection.connectTo(ipAddress, port);
    return this.nodeUdpConnection;
  }

}
