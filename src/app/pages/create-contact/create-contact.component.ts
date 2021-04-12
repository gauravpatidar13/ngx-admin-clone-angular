import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as contactsActions from '../../store/actions/contacts.actions'; 
import { ContactsState } from '../../store/state/contacts.state';
@Component({
  selector: 'ngx-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  constructor(private store:Store<ContactsState>) { }

  ngOnInit(): void {
  }
createContact(contact){
this.store.dispatch(new contactsActions.CreateContact(contact))
}
}
