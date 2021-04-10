import { Component, OnInit,OnChanges, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subscription,interval } from 'rxjs';
import { EarningChartDataService } from '../../../@core/mock/earning-chart-data.service';

@Component({
  selector: 'ngx-earning-card',
  templateUrl: './earning-card.component.html',
  styleUrls: ['./earning-card.component.scss']
})
export class EarningCardComponent implements OnInit,OnChanges,OnDestroy {
  liveUpdateChartData:{value:[string,number]}[];
  intervalId;
 
  intervalSubscription:Subscription;
  _options2;
  chartInstance;
  setLineTheme(earningLineTheme){
    this._options2={
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'time',
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
          show: false,
        },
      },
      yAxis: {
        boundaryGap: [0, '5%'],
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
          show: false,
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: earningLineTheme.tooltipTextColor,
          fontWeight: earningLineTheme.tooltipFontWeight,
          fontSize: earningLineTheme.tooltipFontSize,
        },
        position: 'top',
        backgroundColor: earningLineTheme.tooltipBg,
        borderColor: earningLineTheme.tooltipBorderColor,
        borderWidth: earningLineTheme.tooltipBorderWidth,
        formatter: params => `$ ${Math.round(parseInt(params.value[1], 10))}`,
        extraCssText: earningLineTheme.tooltipExtraCss,
      },
      series: [
        {
          type: 'line',
          symbol: 'circle',
          sampling: 'average',
          itemStyle: {
            normal: {
              opacity: 0,
            },
            emphasis: {
              opacity: 0,
            },
          },
          lineStyle: {
            normal: {
              width: 0,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: earningLineTheme.gradFrom,
              }, {
                offset: 1,
                color: earningLineTheme.gradTo,
              }]),
              opacity: 1,
            },
          },
           data: this.liveUpdateChartData,
        },
      ],
      animation: true,
    };
  }
  onChartInit(ec){
this.chartInstance=ec;
  }
  constructor(private theme:NbThemeService,
    private earningLineDataService:EarningChartDataService) {
    
   }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngOnChanges(): void {
   // console.log('hey i am here')
  this.chartInstance.setOption({
    series:[{
      data:this.earningLineDataService.getEarningLiveUpdateCardData('bitcoin')
    }]
  })
  }

  ngOnInit(): void {
    this.liveUpdateChartData=this.earningLineDataService.getEarningCardData("bitcoin")
    this.theme.getJsTheme().subscribe(config=>{
     this.setLineTheme(config.variables.earningLine)
    this.intervalId=setInterval(()=>{
    //  console.log('hey i am inteval')
      this.ngOnChanges();
    },200)
    })
  }

}
