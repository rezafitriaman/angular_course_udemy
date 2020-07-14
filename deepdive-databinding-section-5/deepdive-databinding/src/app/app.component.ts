import { Component } from '@angular/core';
import {ElementsServer} from '../type/global.type'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements: Array<ElementsServer> = [];
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  constructor() {

  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    console.log('onChangeFirst')
    console.log(this.serverElements)
    this.serverElements[0].name = 'change'
  }

  onDestroyFirst() {
    console.log(this.serverElements)
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(intervalData: number) {
    console.log('onIntervalFired', intervalData);

    if(intervalData % 2 === 0) {
      this.evenNumbers.push(intervalData);
    }else {
      this.oddNumbers.push(intervalData);
    }
  }
}