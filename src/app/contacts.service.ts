import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { API_ENDPOINT } from './app.tokens';
import { Contact } from "./models/contact";

@Injectable()
export class ContactsService {

  constructor(private http: Http, @Inject(API_ENDPOINT) private apiEndpoint) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get(`${this.apiEndpoint}/contacts`)
      .map((res) => res.json().items);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get(`${this.apiEndpoint}/contacts/${id}`)
      .map((res) => res.json().item);
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }

  search(term: string) {
    return this.http.get(`${this.apiEndpoint}/search?text=${term}`)
      .map((res) => res.json().items);
  }

}
