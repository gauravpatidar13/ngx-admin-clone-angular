import {createAction, props } from '@ngrx/store';
import {Contact} from '../entity/contact.model';;
export const GET_CONTACTS = '[Contact Page] Get Contacts';
export const getContact = createAction(
    GET_CONTACTS,
  props<{contacts: Contact[]}>()
);

