import { Action } from "@ngrx/store";
import { Graph } from "../entity/graph.model";
import { Update } from '@ngrx/entity';
export const READ_GRAPH = 'Read Graph';
export const CREATE_GRAPH = 'Create Graph';
export const UPDATE_GRAPH = 'Update Graph';
export const DELETE_GRAPH = 'Delete Graph';
export const READ_GRAPH_SUCCESS = "Read Graph Success"
export const CREATE_GRAPH_SUCCESS = 'Create Graph Success';
export const UPDATE_GRAPH_SUCCESS = 'Update Graph Success';
export const DELETE_GRAPH_SUCCESS = 'Delete Graph Success';

export class ReadGraph implements Action {
  readonly type = READ_GRAPH;
  constructor(public graph: Graph[]) {
  }
}
export class ReadGraphSuccess implements Action {
  readonly type = READ_GRAPH_SUCCESS;
  constructor(public graphs: Graph[]) {
  }
}
export class CreateGraph implements Action {
  readonly type = CREATE_GRAPH;
  constructor(public graph: Graph) {
  }
}

export class CreateGraphSuccess implements Action {
  readonly type = CREATE_GRAPH_SUCCESS;
  constructor(public graph: Graph) {
  }
}
export class UpdateGraph implements Action {
  readonly type = UPDATE_GRAPH;
  constructor(public graph: Graph) {
  }
}
export class UpdateGraphSuccess implements Action {
  readonly type = UPDATE_GRAPH_SUCCESS;
  constructor(public graph: Update<Graph>) {
  }
}

export class DeleteGraph implements Action {
  readonly type = DELETE_GRAPH;
  constructor(public id: any) {
  }
}
export class DeleteGraphSuccess implements Action {
  readonly type = DELETE_GRAPH_SUCCESS;
  constructor(public id: any) {
  }
}
export type Actions = ReadGraph | CreateGraph | UpdateGraph | DeleteGraph |
  ReadGraphSuccess | CreateGraphSuccess | UpdateGraphSuccess | DeleteGraphSuccess

