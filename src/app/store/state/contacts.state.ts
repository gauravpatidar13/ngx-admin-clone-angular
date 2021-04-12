import { Contact } from './../entity/contact.model';
import {EntityState,createEntityAdapter} from '@ngrx/entity';
export interface ContactsState extends EntityState<Contact>{
}
export const contactsAdapter=createEntityAdapter<Contact>();
export const initialState:ContactsState=contactsAdapter.getInitialState();