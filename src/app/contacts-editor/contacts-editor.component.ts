import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent {

  @Input() contact: Contact;

  @Output() save = new EventEmitter<Contact>();

  @Output() cancel = new EventEmitter<Contact>();

}
