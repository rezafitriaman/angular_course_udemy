import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, from, Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivated-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss'],
})
export class EditServerComponent
  implements OnInit, OnDestroy, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  paramId: number;
  paramsSubscription: Subscription;
  allowEdit = false;
  changeSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.server = this.serversService.getServer(id);
    this.route.queryParams.subscribe((queryParams: Params) => {
      console.log(queryParams);
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.paramsSubscription = this.route.params.subscribe((params) => {
      let paramId = params.id === undefined ? 1 : +params.id;
      this.server = this.serversService.getServer(paramId);
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changeSaved = true;
    console.log('change is saved: ', this.changeSaved);
    this.router.navigate(['../', { relativeTo: this.route }]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('a', this.changeSaved);
    console.log('b', this.server.name);
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changeSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  ngOnDestroy() {
    //this.paramsSubscription.unsubscribe()
  }
}
