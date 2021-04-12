import { createFeatureSelector, createSelector } from "@ngrx/store";
import { contactsAdapter, ContactsState } from "../state/contacts.state";
export const CONTACTS_STATE_NAME = "contacts";
export const getContactsState = createFeatureSelector<ContactsState>(CONTACTS_STATE_NAME);
export const getContacts = createSelector(getContactsState, (state:ContactsState) => {
    return state.entities;
})
export const {selectAll} = contactsAdapter.getSelectors();
export const selectAllContacts=createSelector(getContactsState,selectAll);