import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GraphState, graphsAdapter } from "../state/graph.state";
export const GRAPHS_STATE_NAME = "graphs";
export const getGraphState = createFeatureSelector<GraphState>(GRAPHS_STATE_NAME);
export const getGraphs = createSelector(getGraphState, (state:GraphState) => {
    return state.entities;
})
export const {selectAll} = graphsAdapter.getSelectors();
export const selectAllGraphs=createSelector(getGraphState,selectAll);