import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent {

  @Input() contacts: Contact[];

  @Output() search = new EventEmitter<string>();

  @Output() detail = new EventEmitter<Contact>();

}
