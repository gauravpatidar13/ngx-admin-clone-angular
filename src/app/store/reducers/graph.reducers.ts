import * as graphActions from '../actions/graph.actions';
import { graphsAdapter, GraphState, initialState } from '../state/graph.state';

export function graphReducer(state: GraphState = initialState, action: graphActions.Actions) {
    switch (action.type) {
        case graphActions.READ_GRAPH_SUCCESS:
            console.log(action.graphs)
            return graphsAdapter.setAll(action.graphs, state);
        case graphActions.CREATE_GRAPH_SUCCESS:
            return graphsAdapter.addOne(action.graph, state);
        case graphActions.UPDATE_GRAPH_SUCCESS:
            return graphsAdapter.updateOne(action.graph, state);
        case graphActions.DELETE_GRAPH_SUCCESS:
            return graphsAdapter.removeOne(action.id, state);
            default:
                return state;
    }
}