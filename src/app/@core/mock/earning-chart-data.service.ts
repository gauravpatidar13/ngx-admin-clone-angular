import { Injectable } from '@angular/core';
import { Observable ,of as observableOf} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EarningChartDataService {
private currentDate:Date=new Date();
private currentValue=Math.random()*1000;
private ONE_DAY=24*3600*1000;
private data;
  constructor() { }
  getEarningCardData(currency: string): any {
  this. data = this.getDefaultLiveChartData(150);
    return this.data;
  }
  getDefaultLiveChartData(elementsNumber: number) {
    this.currentDate = new Date();
    this.currentValue = Math.random() * 1000;

    return Array.from(Array(elementsNumber))
      .map(item => this.generateRandomLiveChartData());
  }
  generateRandomLiveChartData() {
    this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
    this.currentValue = this.currentValue + Math.random() * 20 - 11;

    if (this.currentValue < 0) {
      this.currentValue = Math.random() * 100;
    }

    return {
      value: [
        [
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          this.currentDate.getDate(),
        ].join('/'),
        Math.round(this.currentValue),
      ],
    };
  }
  getEarningLiveUpdateCardData(currency): Observable<any[]> {
    const newValue = this.generateRandomLiveChartData();

    this.data.shift();
    this.data.push(newValue);

    return this.data;
  }
}
