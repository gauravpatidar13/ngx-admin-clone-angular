import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../store/entity/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
url="http://localhost:3000/contacts"
  constructor(private http:HttpClient) { }
  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url)
  }
}
