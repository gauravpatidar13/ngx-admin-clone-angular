import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrafficListService {
private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);
  constructor() { }
  
   getDataWeek(): any[] {
    const weeks = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    const getFirstDateInPeriod = () => {
      

      return weeks[weeks.length - 1];
    };

    return this.reduceData(weeks, getFirstDateInPeriod);
  }

  private reduceData(timePeriods: string[], getFirstDateInPeriod: () => string): any[] {
    return timePeriods.reduce((result, timePeriod, index) => {
      const hasResult = result[index - 1];
      const prevDate = hasResult ?
        result[index - 1].comparison.nextDate :
        getFirstDateInPeriod();
      const prevValue = hasResult ?
        result[index - 1].comparison.nextValue :
        this.getRandom(100);
      const nextValue = this.getRandom(100);
      const deltaValue = prevValue - nextValue;

      const item = {
        date: timePeriod,
        value: this.getRandom(1000),
        delta: {
          up: deltaValue <= 0,
          value: Math.abs(deltaValue),
        },
        comparison: {
          prevDate,
          prevValue,
          nextDate: timePeriod,
          nextValue,
        },
      };

      return [...result, item];
    }, []);
  }
}
