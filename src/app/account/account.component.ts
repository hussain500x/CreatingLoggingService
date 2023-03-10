import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LogginService} from "../logging_service"
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LogginService],
})

export class AccountComponent {
  
  @Input()
  account!: { name: string; status: string; };
  @Input()
  id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logginService:LogginService ){}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
   // this.loggingService.emit({id:this.id , newStatus: status})
   this.logginService.logStatusChange(status) ;
   console.log('A server status changed, new status: ' + status);
  }
}
  

