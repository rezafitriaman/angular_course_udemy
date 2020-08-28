import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A serve status changed, new status: ' + status)
    }
}