import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from 'src/app/services/logging/logging.service';
import { AccountsService } from '../services/account/accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    //this.loggingService.logStatusChange(accountStatus);
    
  }
}
