import { contactReducer } from "../reducers/contacts.reducers";
import { graphReducer } from "../reducers/graph.reducers";
import { ContactsState } from "./contacts.state";
import { GraphState } from "./graph.state";

export interface AppState{
    contacts:ContactsState;
    graphs:GraphState;
}

export const appReducer={
    contacts:contactReducer,
    graphs:graphReducer
}