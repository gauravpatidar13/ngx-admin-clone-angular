import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as contactsActions from '../../../store/actions/contacts.actions';
import { Contact } from '../../../store/entity/contact.model';
import { getContacts } from '../../../store/selectors/contacts.selector';
import { ContactsState } from '../../../store/state/contacts.state';
@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit, AfterViewInit {
  contactsData;
  mcontacts: Contact[] = [];
  constructor(private store: Store<ContactsState>, private router: Router) {
    this.store.dispatch(new contactsActions.ReadContacts([]));
    this.store.select(getContacts).subscribe(data => {
      console.log(data)
      this.contactsData = data;
    });
  }
  ngAfterViewInit(): void {
    Object.keys(this.contactsData).forEach(function (key) {
      console.log(this.contactData[key]);
      this.mcontacts = [];
      this.mcontacts.push(this.contactData[key]);
      console.log(this.mcontacts)
    })
  }
  ngOnInit(): void {


  }

  deleteContact(id) {
    this.store.dispatch(new contactsActions.DeleteContact(id))
  }
  updateContact(contact: Contact) {
    this.router.navigate(["pages/update-contact"], {
      queryParams: {
        id: contact.id,
        name: contact.name,
        picture: contact.picture,
        type: contact.type
      }
    })
  }
}
