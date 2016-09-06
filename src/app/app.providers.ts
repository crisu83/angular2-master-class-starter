import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus.service';
import { API_ENDPOINT } from './app.tokens';

export const APP_PROVIDERS = [
  ContactsService, // shorthand syntax for: { provide: ContactsService, useClass: ContactsService }
  EventBusService,
  { provide: API_ENDPOINT, useValue: '//localhost:4201/api' }
];
