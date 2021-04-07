import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-ecommerce-charts',
  templateUrl: './ecommerce-charts.component.html',
  styleUrls: ['./ecommerce-charts.component.scss']
})
export class EcommerceChartsComponent implements OnInit ,AfterViewInit{
  orderProfitLegend;
  ordersChartData;
  legendItems;
  eTheme; 
  period="week";
  option;
  constructor(private themeService:NbThemeService) { }
  ngAfterViewInit(): void {
   this.updateOrdersChartOptions(this.ordersChartData)
  }
  changePeriod(period){
this.period=period;
  }
  ngOnInit(): void {
    this.themeService.getJsTheme().subscribe(config=>{
     this.orderProfitLegend= config.variables.orderProfitLegend;
     this.legendItems=[
      {
        iconColor: this.orderProfitLegend.firstItem,
        title: 'Payment',
      },
      {
        iconColor: this.orderProfitLegend.secondItem,
        title: 'Canceled',
      },
      {
        iconColor: this.orderProfitLegend.thirdItem,
        title: 'All orders',
      },
    ];
     this.eTheme=config.variables.orders;
    this.option={
      grid: {
        left: 40,
        top: 20,
        right: 0,
        bottom: 40,
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: this.eTheme.tooltipLineColor,
            width: this.eTheme.tooltipLineWidth,
          },
        },
        textStyle: {
          color: this.eTheme.tooltipTextColor,
          fontSize: this.eTheme.tooltipFontSize,
          fontWeight: this.eTheme.tooltipFontWeight,
        },
        position: 'top',
        backgroundColor: this.eTheme.tooltipBg,
        borderColor: this.eTheme.tooltipBorderColor,
        borderWidth: 1,
        formatter: (params) => {
          return Math.round(parseInt(params.value, 10));
        },
        extraCssText: this.eTheme.tooltipExtraCss,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        offset: 5,
        data: [],
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: this.eTheme.axisTextColor,
          fontSize: this.eTheme.axisFontSize,
        },
        axisLine: {
          lineStyle: {
            color: this.eTheme.axisLineColor,
            width: '2',
          },
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: this.eTheme.axisLineColor,
            width: '1',
          },
        },
        axisLabel: {
          color: this.eTheme.axisTextColor,
          fontSize: this.eTheme.axisFontSize,
        },
        axisTick: {
          show: false,
        },
        splitLine: {

          lineStyle: {
            color: this.eTheme.yAxisSplitLine,
            width: '1',
          },
        },
      },
      series: [
        this.getFirstLine(this.eTheme),
        this.getSecondLine(this.eTheme),
        this.getThirdLine(this.eTheme),
      ],
    };
    })
  this.ordersChartData={
    chartLabel: ["Mon","","","","","","Tue",
    "","","","","",
    "Wed","","","","","","Thu"
    ,"","","","","","Fri","","","","","","Sat",
    "","","","","","Sun","","","","",""],
    linesData: [
      [
        184, 267, 326, 366, 389, 399,
        392, 371, 340, 304, 265, 227,
        191, 158, 130, 108, 95, 91, 97,
        109, 125, 144, 166, 189, 212,
        236, 259, 280, 300, 316, 329,
        338, 342, 339, 329, 312, 288,
        258, 221, 178, 128, 71,
      ],
      [
        158, 178, 193, 205, 212, 213,
        204, 190, 180, 173, 168, 164,
        162, 160, 159, 158, 159, 166,
        179, 195, 215, 236, 257, 276,
        292, 301, 304, 303, 300, 293,
        284, 273, 262, 251, 241, 234,
        232, 232, 232, 232, 232, 232,
      ],
      [
        58, 137, 202, 251, 288, 312,
        323, 324, 311, 288, 257, 222,
        187, 154, 124, 100, 81, 68, 61,
        58, 61, 69, 80, 96, 115, 137,
        161, 186, 210, 233, 254, 271,
        284, 293, 297, 297, 297, 297,
        297, 297, 297, 297, 297,
      ],
    ],
  };
    
  }
  getFirstLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
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
            color: eTheme.firstAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.firstAreaGradTo,
          }]),
          opacity: 1,
        },
      },
      data: [],
    };
  }
  getSecondLine(eTheme) {
    return         {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
          borderColor: eTheme.itemBorderColor,
          borderWidth: 2,
          opacity: 1,
        },
      },
      lineStyle: {
        normal: {
          width: eTheme.lineWidth,
          type: eTheme.lineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.secondLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.secondLineGradTo,
          }]),
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.secondAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.secondAreaGradTo,
          }]),
        },
      },
      data: [],
    };
  }
  getThirdLine(eTheme) {
    return {
      type: 'line',
      smooth: true,
      symbolSize: 20,
      itemStyle: {
        normal: {
          opacity: 0,
        },
        emphasis: {
          color: '#ffffff',
          borderColor: eTheme.itemBorderColor,
          borderWidth: 2,
          opacity: 1,
        },
      },
      lineStyle: {
        normal: {
          width: eTheme.lineWidth,
          type: eTheme.lineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.thirdLineGradFrom,
          }, {
            offset: 1,
            color: eTheme.thirdLineGradTo,
          }]),
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.thirdAreaGradFrom,
          }, {
            offset: 1,
            color: eTheme.thirdAreaGradTo,
          }]),
        },
      },
      data: [],
    };
  }
  getNewSeries(series, linesData: number[][]) {
    return series.map((line, index) => {
      return {
        ...line,
        data: linesData[index],
      };
    });
  }

  getNewXAxis(xAxis, chartLabel: string[]) {
    return {
      ...xAxis,
      data: chartLabel,
    };
  }
  updateOrdersChartOptions(ordersChartData) {
    const options = this.option;
    const series = this.getNewSeries(options.series, ordersChartData.linesData);
    const xAxis = this.getNewXAxis(options.xAxis, ordersChartData.chartLabel);
    this.option = {
      ...options,
      xAxis,
      series,
    };
  }
}
