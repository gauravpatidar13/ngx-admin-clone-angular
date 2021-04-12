import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Update} from '@ngrx/entity';
import { map, switchMap } from 'rxjs/operators';
import { ContactsService } from '../../@core/data/contacts.service';
import * as contactsActions from '../actions/contacts.actions';
import { Contact } from '../entity/contact.model';
@Injectable()
export class ContactsEffects {
  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {
  }

  readContacts$ = createEffect(() =>
    this.actions$.pipe(ofType(contactsActions.READ_CONTACTS),
      switchMap(() =>
        this.contactsService.readContacts().pipe(
          map((contacts) =>
            new contactsActions.ReadContactsSuccess(contacts))
        )
      ))
  )

  createContact$ = createEffect(() =>
    this.actions$.pipe(ofType(contactsActions.CREATE_CONTACT),
      switchMap((action: contactsActions.CreateContact) =>
        this.contactsService.createContact(action.contact).pipe(
          map((contact) =>
            new contactsActions.CreateContactSuccess(contact))
        )
      ))
  )

  updateContact$ = createEffect(() =>
    this.actions$.pipe(ofType(contactsActions.UPDATE_CONTACT),
      switchMap((action: contactsActions.UpdateContact) =>
        this.contactsService.updateContact(action.contact).pipe(
          map((contact) =>{
          const updatedContact:Update<Contact>={
            id:action.contact.id,
            changes:{
              ...action.contact
            }
          }
           return new contactsActions.UpdateContactSuccess(updatedContact)})
        )
      ))
  )

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(ofType(contactsActions.DELETE_CONTACT),
      switchMap((action: contactsActions.DeleteContact) =>
        this.contactsService.deleteContact(action.id).pipe(
          map((message) =>
            new contactsActions.DeleteContactSuccess(action.id))
        )
      ))
  )
}