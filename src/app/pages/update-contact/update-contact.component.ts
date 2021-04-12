import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact } from '../../store/entity/contact.model';
import { ContactsState } from '../../store/state/contacts.state';
import * as contactsActions from '../../store/actions/contacts.actions';
import { ActivatedRoute } from '@angular/router';

export class UContact implements Contact{
  name: string;
  type: string;
  picture: string;
  id: number;
constructor(){}
}

@Component({
  selector: 'ngx-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
contact:UContact;
  constructor(private store:Store<ContactsState>,private ar:ActivatedRoute) {
    this.contact=new UContact();
    this.ar.queryParamMap.subscribe(params=>{
     
this.contact.id=parseInt(params.get("id"));
this.contact.name=params.get("name");
this.contact.picture=params.get("picture");
this.contact.type=params.get("type");
    })
   }

  ngOnInit(): void {
  }
updateContact(contact1:Contact){
  console.log(contact1)
  this.store.dispatch(new contactsActions.UpdateContact(contact1));
}
}
