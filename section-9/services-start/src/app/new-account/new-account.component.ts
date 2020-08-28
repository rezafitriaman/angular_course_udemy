import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('new status: ' + status)
    );
  }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    //this.loggingService.logStatusChange(accountStatus);
  }
}
