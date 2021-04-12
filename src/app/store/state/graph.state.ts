import { Graph } from './../entity/graph.model';
import {EntityState,createEntityAdapter} from '@ngrx/entity';
export interface GraphState extends EntityState<Graph>{
}
export const graphsAdapter=createEntityAdapter<Graph>();
export const initialState:GraphState=graphsAdapter.getInitialState();