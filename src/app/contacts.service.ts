import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Contact } from "./models/contact";

const API_ENDPOINT = '//localhost:4201/api';

@Injectable()
export class ContactsService {

  constructor(private http: Http) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get(`${API_ENDPOINT}/contacts`)
      .map((res) => res.json())
      .map((data) => data.items);
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.get(`${API_ENDPOINT}/contacts/${id}`)
      .map((res) => res.json())
      .map((data) => data.item);
  }
}
