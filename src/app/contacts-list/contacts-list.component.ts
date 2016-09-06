import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe(this.setContacts);
  }

  search(term: string) {
    this.contactsService.search(term).subscribe(this.setContacts);
  }

  setContacts = (contacts: Contact[]) => {
    this.contacts = contacts;
  }

}
