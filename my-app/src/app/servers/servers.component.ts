import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'TestServer';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
