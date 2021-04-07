import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfitCardChartDataService } from '../../../@core/mock/profit-card-chart-data.service';

@Component({
  selector: 'ngx-profit-card',
  templateUrl: './profit-card.component.html',
  styleUrls: ['./profit-card.component.scss']
})
export class ProfitCardComponent implements OnInit {
linesDataSub:Promise<Object>;
linesData;
  _options;
  constructor(private profitCardDataService:ProfitCardChartDataService) { }

  ngOnInit(): void {
this.linesDataSub = this.profitCardDataService.getChartData();
this.linesDataSub.then(success=>{
  this.linesData=success;
  console.log(this.linesData.result[0])
  this._options={
    color: [
      "#3366ff",
      "#00d68f"
    ],
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    legend: {
      data: ['transactions', 'orders'],
      borderWidth: 0,
      borderRadius: 0,
      itemWidth: 15,
      itemHeight: 15,
      textStyle: {
        color: 'black',
      },
    },
    tooltip: {
      axisPointer: {
        type: 'shadow',
      },
      textStyle: {
        color: "#1a2138",
        fontWeight: 'normal',
        fontSize: '32',
      },
      position: 'top',
      backgroundColor: '#ffffff',
      borderColor: '#f7f9fc',
      borderWidth: '0.5',
      formatter: params => `$ ${Math.round(parseInt(params.value, 10))}`,
      extraCssText: 'extra css text',
    },
    xAxis: [
      {
        data: [],
        silent: false,
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#edf1f7',
           
            width: '0.5',
          },
        },
      },
    ],
    series: [
      {
        name: 'transactions',
        type: 'bar',
        data: this.linesData.result[0].firstLine,
        animationDelay: idx => idx * 10,
      },
      {
        name: 'orders',
        type: 'bar',
        data: this.linesData.result[0].secondLine,
        animationDelay: idx => idx * 10 + 100,
      },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: idx => idx * 5,
  }
})

  }

}
