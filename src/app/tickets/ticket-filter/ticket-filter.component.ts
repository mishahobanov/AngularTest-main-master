import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TicketState } from '../ticket.module';
import { LoadTickets, LoadTicketsStatusEdit, LoadTicketsStatusNew } from '../state/ticket.actions';

@Component({
  selector: 'app-ticket-filter',
  templateUrl: './ticket-filter.component.html',
  styleUrls: ['./ticket-filter.component.scss']
})
export class TicketFilterComponent  {
  constructor(private store: Store<TicketState>) {}

  showNewTickets(): void{
    this.store.dispatch(LoadTicketsStatusNew());
  }
  showEditedTickets(): void{
    this.store.dispatch(LoadTicketsStatusEdit());
  }
  showAllTickets(): void{
    this.store.dispatch(LoadTickets());
  }
}
