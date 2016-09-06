import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trm-contacts-search',
  templateUrl: 'contacts-search.component.html',
  styleUrls: ['contacts-search.component.css']
})
export class ContactsSearchComponent {

  @Output() search = new EventEmitter<string>();

}
