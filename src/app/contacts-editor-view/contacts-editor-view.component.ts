import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor-view',
  templateUrl: 'contacts-editor-view.component.html',
  styleUrls: ['contacts-editor-view.component.css']
})
export class ContactsEditorViewComponent implements OnInit {

  contact: Contact = <Contact>{ address: {} };

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.params['id']);
    this.contactsService.getContact(id)
      .subscribe((contact) => this.contact = contact);
  }

  private cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  private save(contact: Contact) {
    this.contactsService.updateContact(contact)
      .subscribe(() => this.goToDetails(contact));
  }

  private goToDetails(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

}
