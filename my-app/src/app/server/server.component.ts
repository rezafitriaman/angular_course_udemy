import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit  {
    serverId: number = 10;
    serverStaus: string = 'offline'

    constructor() { }

  ngOnInit(): void {
  }

  getServerStatus() {
      return this.serverStaus;
  }
}