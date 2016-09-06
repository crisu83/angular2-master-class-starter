import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list-view',
  templateUrl: 'contacts-list-view.component.html',
  styleUrls: ['contacts-list-view.component.css']
})
export class ContactsListViewComponent implements OnInit {

  contacts: Contact[];

  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService,
              private eventBusService: EventBusService,
              private router: Router) {
  }

  ngOnInit() {
    this.eventBusService.emit(EventBusService.EVENT_TITLE_CHANGED, 'Contacts');

    Observable.merge(
      this.contactsService.getContacts().takeUntil(this.terms$),
      this.contactsService.search(this.terms$, 400)
    ).subscribe(
      (contacts) => this.contacts = contacts,
      (error) => console.error(error)
    );
  }

  private navigateToDetail(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

}
