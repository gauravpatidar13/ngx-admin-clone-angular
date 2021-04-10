import { createAction, props } from '@ngrx/store';
import {Graph} from '../entity/graph.model';;
export const GET_GRAPH = '[Graph Page] Get Graph';
export const getGraph = createAction(
    GET_GRAPH,
  props<{graph: Graph}>()
);

