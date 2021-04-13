import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Update} from '@ngrx/entity';
import { map, switchMap } from 'rxjs/operators';
import { GraphService } from '../../@core/data/graph.service';
import * as graphActions from '../actions/graph.actions';
import { Graph } from '../entity/graph.model';

@Injectable()
export class GraphEffects {
  constructor(
    private actions$: Actions,
    private graphService: GraphService) { }

  readGraph$ = createEffect(() =>
    this.actions$.pipe(ofType(graphActions.READ_GRAPH), switchMap(() =>
      this.graphService.readGraphs().pipe(
        map((graphs) => new graphActions.ReadGraphSuccess(graphs))
      )
    ))
  )

  createGraph$ = createEffect(() =>
    this.actions$.pipe(ofType(graphActions.CREATE_GRAPH), switchMap((action: graphActions.CreateGraph) =>
      this.graphService.createGraph(action.graph).pipe(
        map((graph) => new graphActions.CreateGraphSuccess(graph))
      )
    ))
  )

  updateGraph$ = createEffect(() =>
    this.actions$.pipe(ofType(graphActions.UPDATE_GRAPH), switchMap((action: graphActions.UpdateGraph) =>
      this.graphService.updateGraph(action.graph).pipe(
        map((graph) =>{ 
          console.log(graph)
          const updatedGraph:Update<Graph>={
            id:action.graph.id,
            changes:{
              ...action.graph
            }
          }
          return new graphActions.UpdateGraphSuccess(updatedGraph)})
      )
    ))
  )

  deleteGraph$ = createEffect(() =>
    this.actions$.pipe(ofType(graphActions.DELETE_GRAPH), switchMap((action: graphActions.DeleteGraph) =>
      this.graphService.deleteGraph(action.id).pipe(
        map((id) => new graphActions.DeleteGraphSuccess(id))
      )
    ))
  )
}