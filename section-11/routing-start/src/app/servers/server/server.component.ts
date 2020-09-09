import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit, OnDestroy {
  public server: {id: number, name: string, status: string}
  public paramsSubscription: Subscription
  constructor(private serverService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log(data);
      this.server = data['server']
    });
    //or
    /* const id = this.route.snapshot.params.id;
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServer(+params.id);
    });
    this.server = this.serverService.getServer(+id); */

    /* console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment); */
  }
  
  onEdit() {
    const id = +this.route.snapshot.params.id;
    //this.router.navigate([`/servers/`, `${id}`, `edit`])
    //or
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

  ngOnDestroy() {
    //this.paramsSubscription.unsubscribe()
  }

}
