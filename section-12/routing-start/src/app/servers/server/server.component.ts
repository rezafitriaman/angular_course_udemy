import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  public server: {id: number, name: string, status: string}
  constructor(private serverService: ServersService) { }

  ngOnInit(): void {
    this.server = this.serverService.getServer(1);
    console.log('onInit')
  }

}
