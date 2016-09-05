import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Contact } from "./models/contact";

@Injectable()
export class ContactsService {

  private API_ENDPOINT = '//localhost:4201/api';

  constructor(private http: Http) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
      .map((res) => res.json().items);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
      .map((res) => res.json().item);
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.API_ENDPOINT}/contacts/${contact.id}`, contact)
      .map((res) => res.json().item);
  }
}
