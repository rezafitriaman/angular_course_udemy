import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
        .offline {
            color: yellow;
        }
    `]
})
export class ServerComponent implements OnInit  {
    serverId: number = 10;
    serverStaus: string = 'offline'

    constructor() { 
        this.serverStaus = Math.random() > 0.5 ? 'online' : 'offline'
    }

  ngOnInit(): void {
  }

  getServerStatus() {
      return this.serverStaus;
  }

  getColor() {
      return this.serverStaus === 'online' ? 'hotPink' : 'green'
  }
}