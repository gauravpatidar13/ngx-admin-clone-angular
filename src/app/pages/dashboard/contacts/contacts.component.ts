import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../../store/entity/contact.model';
import { ContactsState } from '../../../store/state/contacts.state';

@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  contacts1:Observable<Contact[]>;
  mContacts;
  constructor(private store:Store<ContactsState>) {
  }
  ngOnInit(): void {
    this.contacts1=this.store.select(state=>state.contacts);
    this.contacts1.subscribe(data=>{
      console.log(data[0])
      this.mContacts=data[0];
    })
  }
}
