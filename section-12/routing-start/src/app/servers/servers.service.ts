import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'offline'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    },
  ];
  constructor() { 
  }

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
  
    const server = this.servers.find((server)=> {
      return server.id === id;
    });
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    console.log(this.servers)
    console.log(3)
    const server = this.servers.find((server) => {
      return server.id === id;
    });
    if(server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
