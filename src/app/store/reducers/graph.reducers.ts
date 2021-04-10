export const GET_GRAPH = '[Graph Page] Get Graph';
export function getGraphReducer(state= [], action) {
    switch (action.type) {
        case GET_GRAPH:
            return [...state, action.graph[0]];
        default:
            return state;
    }
}