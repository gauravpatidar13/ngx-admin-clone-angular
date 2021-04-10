import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ContactsService } from '../../@core/data/contacts.service';
import * as contactsActions from '../actions/contacts.actions';
@Injectable()
export class ContactsEffects {
  constructor(
    private actions$: Actions,
    private contactsService: ContactsService
  ) {   
  }

getContacts$=createEffect(()=>
 this.actions$.pipe(ofType("@ngrx/effects/init"),
 switchMap(()=>
 this.contactsService.getContacts().pipe(
   map((contacts)=>
   contactsActions.getContact({contacts:contacts}))
 )
 ))
)
}