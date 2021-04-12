import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, forkJoin } from 'rxjs';
import { ProfitCardChartConfigService } from '../../../@core/mock/profit-card-chart-config.service';
import * as graphAction from '../../../store/actions/graph.actions';
import { Graph } from '../../../store/entity/graph.model';
import { GraphState } from '../../../store/state/graph.state';
import { selectAllGraphs } from '../../../store/selectors/graphs.selector';
import { message } from '../e-commerce.component';
@Component({
  selector: 'ngx-profit-card',
  templateUrl: './profit-card.component.html',
  styleUrls: ['./profit-card.component.scss']
})
export class ProfitCardComponent implements OnInit {
  linesData: Graph;
  @Input() event;
  graphs$: Observable<Graph[]>;
  _options;
  config;
  constructor(private store: Store<GraphState>, private router: Router,
    private pccc: ProfitCardChartConfigService) {
  

    this.store.dispatch(new graphAction.ReadGraph([]));
    this.graphs$ = this.store.select(selectAllGraphs);
    this.graphs$.subscribe(data => {
      
      this.linesData = data[0];
      console.log(data)
      this._options =
      {
        color: [
          "#3366ff",
          "#00d68f"
        ],
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
        legend: {
          data: [
            "transactions",
            "orders"
          ],
          borderWidth: 0,
          borderRadius: 0,
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            color: "black"
          }
        },
        tooltip: {
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            color: "#1a2138",
            fontWeight: "normal",
            fontSize: "32"
          },
          position: "top",
          backgroundColor: "#ffffff",
          borderColor: "#f7f9fc",
          borderWidth: "0.5",
          extraCssText: "extra css text"
        },
        xAxis: [
          {
            data: [],
            silent: false,
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#edf1f7",
                width: "0.5"
              }
            }
          }
        ],
        series: [
          {
            name: 'transactions',
            type: 'bar',
            data: this.linesData.firstLine,
            animationDelay: idx => idx * 10,
          },
          {
            name: 'orders',
            type: 'bar',
            data: this.linesData.secondLine,
            animationDelay: idx => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: idx => idx * 5,
      }

    })
    message.subscribe(data=>{
      if (data == "update graph") {
        console.log('update graph from child')
        this.updateGraph();
      }
      else if (data == "delete graph") {
      console.log('delete graph from child')
        this.deleteGraph();
      }
    })
   
   
  }
  deleteGraph() {
    this.store.dispatch(new graphAction.DeleteGraph(this.linesData.id))
  }
  updateGraph() {
    localStorage.setItem("graph", JSON.stringify(this.linesData))
    this.router.navigate(["pages/update-graph"])
  }
  ngOnInit(): void {
   
  
  }
}
