export interface WebsocketWebsocket {

  /**
   * Create new connection
   * @param ipAddress ip-address which we will connect to
   * @param port access number
   */
  connectTo(ipAddress: string, port: number): boolean;

  /**
   * Disconnect from the connected address
   */
  disconnect(): boolean;

  /**
   * Send message to connected address
   * @param msg message to be send
   * @param event for which event the message is to be send
   */
  sendMessage(msg: string, event: string): Promise<string>;

  /**
   *  Adds listener for an event
   * @param event subject to be listened for
   * @param func function that's going to be called
   */
  addListener(event: string, func: any): void;

}
