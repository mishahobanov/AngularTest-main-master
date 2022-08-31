import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITicket, Ticket } from './ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketsService {

    constructor(private http: HttpClient) {

    }

    getTickets(): Observable<Ticket[]> {
        return this.http.get<Ticket[]>('http://localhost:3000/tickets');
    }

    insertElement(
        ticket: Partial<Ticket>
      ): Observable<Ticket> {
        return this.http.post<Ticket>(
          'http://localhost:3000/tickets',
          ticket
        );
      }
    
      updateElement(
        ticket: Partial<Ticket>
      ): Observable<Ticket> {
        return this.http.put<Ticket>(
          `http://localhost:3000/tickets/${ticket.id}`,
          ticket
        );
      }
    
}