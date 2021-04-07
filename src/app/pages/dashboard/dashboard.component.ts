import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  statusCards = [{ title: "Light", iconClass: 'nb-lightbulb', type: "primary" },
  {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success'
  },
  {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info'
  }, {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning'
  }]
  chartPoints=[
    490, 490, 495, 500,
    505, 510, 520, 530,
    550, 580, 630, 720,
    800, 840, 860, 870,
    870, 860, 840, 800,
    720, 200, 145, 130,
    130, 145, 200, 570,
    635, 660, 670, 670,
    660, 630, 580, 460,
    380, 350, 340, 340,
    340, 340, 340, 340,
    340, 340, 340,
  ];
  option
  constructor(private theme:NbThemeService) { }

  ngOnInit(): void {
    this.theme.getJsTheme().subscribe(config=>{
const eTheme:any=config.variables.electricity;
this.option= this.option = {
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 80,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: eTheme.tooltipLineColor,
        width: eTheme.tooltipLineWidth,
      },
    },
    textStyle: {
      color: eTheme.tooltipTextColor,
      fontSize: 20,
      fontWeight: eTheme.tooltipFontWeight,
    },
    position: 'top',
    backgroundColor: eTheme.tooltipBg,
    borderColor: eTheme.tooltipBorderColor,
    borderWidth: 1,
    formatter: '{c0} kWh',
    extraCssText: eTheme.tooltipExtraCss,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    offset: 25,
    data: ["1","","","","","2","","","","","3","","","","",
    "4","","","","","5","","","","",
    "6","","","","",
    "7","","","","",
    "8","","","","","9","","","","","10","","","",""],
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: eTheme.xAxisTextColor,
      fontSize: 18,
    },
    axisLine: {
      lineStyle: {
        color: eTheme.axisLineColor,
        width: '2',
      },
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
      show: true,
      lineStyle: {
        color: eTheme.yAxisSplitLine,
        width: '1',
      },
    },
  },
  series: [
    {
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
            color: eTheme.lineGradFrom,
          }, {
            offset: 1,
            color: eTheme.lineGradTo,
          }]),
          shadowColor: eTheme.lineShadow,
          shadowBlur: 6,
          shadowOffsetY: 12,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.areaGradFrom,
          }, {
            offset: 1,
            color: eTheme.areaGradTo,
          }]),
        },
      },
      data: this.chartPoints,
    },

    {
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: {
        normal: {
          width: eTheme.lineWidth,
          type: eTheme.lineStyle,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: eTheme.lineGradFrom,
          }, {
            offset: 1,
            color: eTheme.lineGradTo,
          }]),
          shadowColor: eTheme.shadowLineDarkBg,
          shadowBlur: 14,
          opacity: 1,
        },
      },
      data: this.chartPoints,
    },
  ],
};      
    })
  }

}
