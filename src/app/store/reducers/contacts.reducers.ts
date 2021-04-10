export const GET_CONTACTS = '[Contact Page] Get Contacts';
export function getContactReducer(state = [], action) {
    switch (action.type) {
        case GET_CONTACTS:
            return [...state, action.contacts];
            default:
            return [];
    }
}