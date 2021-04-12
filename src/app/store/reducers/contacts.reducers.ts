import * as ContactsActions from '../actions/contacts.actions';
import { contactsAdapter, ContactsState, initialState } from '../state/contacts.state';

export function contactReducer(state: ContactsState = initialState, action: ContactsActions.Actions) {
    switch (action.type) {
        case ContactsActions.CREATE_CONTACT_SUCCESS:
           console.log(action.contact)
            return contactsAdapter.addOne(action.contact, state);
        case ContactsActions.UPDATE_CONTACT_SUCCESS:
            return contactsAdapter.updateOne(action.contact, state);
        case ContactsActions.READ_CONTACTS_DATA_SUCCESS:
            console.log(action.contacts)
            return contactsAdapter.setAll(action.contacts, state);
        case ContactsActions.DELETE_CONTACT_SUCCESS:
            return contactsAdapter.removeOne(action.id, state);
            default:
                return state;
    }
}