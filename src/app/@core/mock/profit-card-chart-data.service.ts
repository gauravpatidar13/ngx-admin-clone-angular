import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfitCardChartDataService implements OnInit {
private data;
url="http://localhost:3000/graph"
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit(){
  console.log('mydata')
  }
  async getChartData(){
    return this.http.get(this.url).toPromise();
  }
}
