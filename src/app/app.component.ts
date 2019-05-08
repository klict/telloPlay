import {Component} from '@angular/core';
import {TelloConnector} from './connector/telloConnector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telloPlay';

  constructor(private telloConnector: TelloConnector) {
    this.telloConnector.activateSdkMode().then(value => console.log('isActivated' + value));

  }

}
