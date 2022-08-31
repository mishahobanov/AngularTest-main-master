import { Action, createReducer, on } from "@ngrx/store";
import { ITicket, Ticket } from "../ticket.model";
import * as fromTicketActions from "./ticket.actions"


const initialState: {
    tickets : Ticket[],
} = {
  tickets:[]
}

export const ticketsReducer= createReducer(
    initialState,
    on(fromTicketActions.LoadTickets,(state)=>({...state})),
    on(fromTicketActions.LoadTicketsSuccess,(state, payload )=>({...state, tickets: payload.payload})),
    on(fromTicketActions.LoadTicketsFail,(state)=>({...state})),
    on(fromTicketActions.LoadTicketsStatusNew,(state)=>({...state,tickets:state.tickets.filter(x=>x.status==='New')})),
    on(fromTicketActions.LoadTicketsStatusNewSuccess,(state,payload)=>({...state, tickets:payload.payload.filter(x=>x.status === 'New')})),

    on(fromTicketActions.LoadTicketsStatusEdit,(state)=>({...state,tickets: state.tickets.filter(x=>x.status === 'Edited')})),
    on(fromTicketActions.LoadTicketsStatusEditSuccess,(state,payload)=>({...state,tickets: payload.payload.filter(x=>x.status === 'Edited')})),



  on(fromTicketActions.createTicketsSuccess, (state, { payload} )=>({...state, tickets: [...state.tickets, payload]})),
    on(fromTicketActions.createTicketsFail,(state)=>({...state})),

    on(fromTicketActions.updateTickets, (state) => {
        return { ...state };
      }),
      on(fromTicketActions.updateTicketsSuccess, (state, action) => {
        const index = state.tickets.findIndex(
          (value) => value.id === action.payload.id
        );
        const updatedItems = [...state.tickets];
        updatedItems[index] = action.payload;
    
        return {
          ...state,
          tickets: [...updatedItems]
        };
      }),
      on(fromTicketActions.updateTicketsFail, (state) => {
        return { ...state };
      }),
)



