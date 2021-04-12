import { Component } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs';
export const message=new Subject<string>();
@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  custom;

  mydata={
    bitcoin: {
      liveChart: [],
      delta: {
        up: true,
        value: 4,
      },
      dailyIncome: 45895,
    },
    tether: {
      liveChart: [],
      delta: {
        up: false,
        value: 9,
      },
      dailyIncome: 5862,
    },
    ethereum: {
      liveChart: [],
      delta: {
        up: false,
        value: 21,
      },
      dailyIncome: 584,
    },
  };
  mydataforselectedcurrency;
  selectedCurrency="bitcoin";
  currencyList=[{value:"bitcoin",name:"Bitcoin"},{value:"tether",name:"Tether"},
  {value:"etheruem",name:"Etheruem"}];

  changeCurrency(currency){
this.selectedCurrency=currency;
this.mydataforselectedcurrency=this.mydata[currency];
  }
  constructor(){
    this.mydataforselectedcurrency=this.mydata['bitcoin'];
  }
  updateGraph(){
this.custom="update graph";
message.next("update graph")
console.log('hey update')
  }
  deleteGraph(){
this.custom="delete graph";
message.next('delete graph')
console.log('hey delte')
  } 
}
