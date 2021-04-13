import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../../store/entity/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url = "http://localhost:3000/contacts"
  constructor(private http: HttpClient) { }
  readContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }
  createContact(contact: Contact): Observable<Contact> {
    console.log(contact)
    return this.http.post<Contact>(this.url, contact);
  }
  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.url, contact);
  }
  deleteContact(id: any): Observable<any> {
    return this.http.delete<any>(this.url + "/" + id);
  }
}
