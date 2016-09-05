import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Contact } from "./models/contact";

@Injectable()
export class ContactsService {

  private API_ENDPOINT = '//localhost:4201/api';

  constructor(private http: Http) {}

  getContacts(): Observable<Contact[]> {
    return this.callApi('contacts')
      .map((data) => data.items);
  }

  getContactById(id: number): Observable<Contact> {
    return this.callApi(`contacts/${id}`)
      .map((data) => data.item);
  }

  callApi(url) {
    return this.http.get(`${this.API_ENDPOINT}/${url}`)
      .map((res) => res.json());
  }
}
