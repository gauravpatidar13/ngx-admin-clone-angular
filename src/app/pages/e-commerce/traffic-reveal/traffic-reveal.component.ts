import { Component, OnInit } from '@angular/core';
import {TrafficListService} from '../../../@core/data/traffic-list.service';
@Component({
  selector: 'ngx-traffic-reveal',
  templateUrl: './traffic-reveal.component.html',
  styleUrls: ['./traffic-reveal.component.scss']
})
export class TrafficRevealComponent implements OnInit {
  types:string[]=["week","month","year"];
  type:string="week";
  item={date:"Mon",value:199,delta:{up:true,value:6},
  prevDate:"Sun",nextDate:"Mon",prevValue:30,nextValue:50,successDelta:true}
  trafficData;
  constructor(private trafficListService:TrafficListService) { }
  changePeriod(period){
this.type=period;
  }
  ngOnInit(): void {
   this.trafficData= this.trafficListService.getDataWeek();
  }

}
