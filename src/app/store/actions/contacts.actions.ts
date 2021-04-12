import { Action } from "@ngrx/store";
import { Contact } from "../entity/contact.model";
import { Update } from '@ngrx/entity';
export const READ_CONTACTS = 'Read Contacts';
export const CREATE_CONTACT = 'Create Contact';
export const CREATE_CONTACT_SUCCESS = "Create Contact Success"
export const UPDATE_CONTACT = 'Update Contact';
export const UPDATE_CONTACT_SUCCESS = 'Update Contact Success';
export const DELETE_CONTACT = 'Delete Contact';
export const DELETE_CONTACT_SUCCESS = 'Delete Contact Success';
export const READ_CONTACTS_DATA_SUCCESS = "Read Contacts Success";

export class CreateContactSuccess implements Action {
  readonly type = CREATE_CONTACT_SUCCESS;
  constructor(public contact: Contact) {
  }
}

export class UpdateContactSuccess implements Action {
  readonly type = UPDATE_CONTACT_SUCCESS;
  constructor(public contact: Update<Contact>) {
  }
}
export class ReadContactsSuccess implements Action {
  readonly type = READ_CONTACTS_DATA_SUCCESS;
  constructor(public contacts: Contact[]) {
  }
}
export class ReadContacts implements Action {
  readonly type = READ_CONTACTS;
  constructor(public contacts: Contact[]) {
  }
}
export class CreateContact implements Action {
  readonly type = CREATE_CONTACT;
  constructor(public contact: Contact) {
  }
}

export class UpdateContact implements Action {
  readonly type = UPDATE_CONTACT;
  constructor(public contact: Contact) {
  }
}

export class DeleteContact implements Action {
  readonly type = DELETE_CONTACT;
  constructor(public id: any) {
  }
}

export class DeleteContactSuccess implements Action {
  readonly type = DELETE_CONTACT_SUCCESS;
  constructor(public id: any) {
  }
}

export type Actions = ReadContacts | CreateContact | UpdateContact |
  DeleteContact | ReadContactsSuccess | CreateContactSuccess |
  UpdateContactSuccess | DeleteContactSuccess

