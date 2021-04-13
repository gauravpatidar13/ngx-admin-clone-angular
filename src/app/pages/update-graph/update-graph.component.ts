import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Graph } from '../../store/entity/graph.model';
import { GraphState } from '../../store/state/graph.state';
import * as graphActions from '../../store/actions/graph.actions';
import { ActivatedRoute } from '@angular/router';
export class UGraph implements Graph{
  firstLine: number[];
  secondLine: number[];
  id: number;
}

@Component({
  selector: 'ngx-update-graph',
  templateUrl: './update-graph.component.html',
  styleUrls: ['./update-graph.component.scss']
})
export class UpdateGraphComponent implements OnInit {
ugraph:UGraph;
  constructor(private store:Store<GraphState>) {
    this.ugraph=new UGraph();
    this.ugraph.id=1;
    this.ugraph.firstLine=[];
    this.ugraph.secondLine=[];
    this.ugraph=JSON.parse(localStorage.getItem("graph"))
   }

  ngOnInit(): void {
  }
  updateGraph(graph){
    let fl=JSON.parse(graph.firstLine);
    let sl=JSON.parse(graph.secondLine);
    let ugraph={id:graph.id,firstLine:fl,secondLine:sl};
    console.log(ugraph)
this.store.dispatch(new graphActions.UpdateGraph(ugraph))
  }
}
