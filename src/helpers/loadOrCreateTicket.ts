import { Ticket } from '../../generated/schema';

export function loadOrCreateTicket(id: string): Ticket {
  let ticket = Ticket.load(id);

  // create case
  if (ticket == null) {
    ticket = new Ticket(id);
    ticket.save();
  }

  return ticket as Ticket;
}
