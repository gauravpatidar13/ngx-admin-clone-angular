import { Component } from '@angular/core';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
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
}
