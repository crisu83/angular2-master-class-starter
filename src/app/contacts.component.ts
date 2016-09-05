import { Component } from '@angular/core';
import { Contact } from "./models/contact";
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {

  contacts: Contact[];

  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }

}
