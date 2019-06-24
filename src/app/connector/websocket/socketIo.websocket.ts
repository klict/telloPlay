import {NgModule} from '@angular/core';

declare function require(name: string);

import {WebsocketWebsocket} from './websocket.websocket';
import {connect} from 'socket.io-client';
import Socket = SocketIOClient.Socket;

@NgModule()
export class SocketIoWebsocket implements WebsocketWebsocket {

  private serverSocket: Socket;


  constructor() {
  }


  connectTo(address: string, port: number): boolean {
    this.serverSocket = connect('http://' + address + ':' + port);

    return this.serverSocket.connected;
  }

  disconnect(): boolean {
    this.serverSocket.disconnect();

    return this.serverSocket.connected;
  }

  sendMessage(msg: string, event: string = 'message'): Promise<string> {

    return new Promise<string>((resolve, reject) => {
      // send command
      this.serverSocket.emit(event, msg);

      // listen for response
      this.serverSocket.on('response', (message, info) => {
        this.serverSocket.removeListener('response');
        resolve(message.toString());
      });
    });
  }

  addListener(event: string, func: () => void) {
    this.serverSocket.addEventListener(event, func);
  }
}
