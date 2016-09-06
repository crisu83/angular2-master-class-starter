import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html',
  styleUrls: ['contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.contactsService.getContact(params['id'])
        .subscribe((contact) => this.contact = contact);
    });
  }

  private navigateToEditor(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

}
