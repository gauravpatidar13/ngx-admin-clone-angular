import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfitCardChartConfigService implements OnInit {

url="/assets/data/chart.config.json";
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit(){
  }
   getChartConfig(){
    return this.http.get(this.url);
  }
}
