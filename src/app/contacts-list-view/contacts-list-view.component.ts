import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list-view',
  templateUrl: 'contacts-list-view.component.html',
  styleUrls: ['contacts-list-view.component.css']
})
export class ContactsListViewComponent implements OnInit {

  contacts: Contact[];

  private terms$: Subject<string> = new Subject<string>();

  constructor(private contactsService: ContactsService, private router: Router) {}

  ngOnInit() {
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
