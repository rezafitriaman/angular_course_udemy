import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  paramId: number;   
  paramsSubscription: Subscription;
  allowEdit = false;
  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('ng-nit')
    this.route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams);
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
  
    
    
   this.paramsSubscription = this.route.params.subscribe(params => {
    let paramId = params.id === undefined ? 1 : +params.id;

    this.server = this.serversService.getServer(paramId)  
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus})
  }

  ngOnDestroy() {
    //this.paramsSubscription.unsubscribe()
  }
}
