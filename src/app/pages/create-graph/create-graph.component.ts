import { Component, OnInit } from '@angular/core';
import { Graph } from '../../store/entity/graph.model';
import * as graphActions from '../../store/actions/graph.actions';
import { Store } from '@ngrx/store';
import { GraphState } from '../../store/state/graph.state';
@Component({
  selector: 'ngx-create-graph',
  templateUrl: './create-graph.component.html',
  styleUrls: ['./create-graph.component.scss']
})
export class CreateGraphComponent implements OnInit {

  constructor(public store:Store<GraphState>) { }

  ngOnInit(): void {
   
  }
  createGraph(graph){
    console.log(graph);
    let fLine=JSON.parse(graph.firstLine);
    let sLine=JSON.parse(graph.secondLine);
    let cgraph={firstLine:fLine,secondLine:sLine,id:graph.id}
    console.log(cgraph);
    this.store.dispatch(new graphActions.CreateGraph(cgraph));
  }
}
