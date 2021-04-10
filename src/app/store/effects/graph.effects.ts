import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GraphService } from '../../@core/data/graph.service';
import * as graphActions from '../actions/graph.actions';
@Injectable()
export class GraphEffects {
action;
  constructor(
    private actions$: Actions,
    private graphService: GraphService
  ) {
    
  }

getGraph$=createEffect(()=>
 this.actions$.pipe(ofType("@ngrx/effects/init"),
 switchMap(()=>
 this.graphService.getGraph().pipe(
   map((graph)=>
   graphActions.getGraph({graph:graph}))
 )
 ))
)
}