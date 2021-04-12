import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule, NbProgressBarModule,
  NbSelectModule, NbTabsetModule,
  NbUserModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { EarningCardComponent } from './earning-card/earning-card.component';
import { EcommerceChartsComponent } from './ecommerce-charts/ecommerce-charts.component';
import { NgxLeafletDemoComponent } from './ngx-leaflet-demo/ngx-leaflet-demo.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { TrafficRevealComponent } from './traffic-reveal/traffic-reveal.component';
import { VisitorsAnalyticsComponent } from './visitors-analytics/visitors-analytics.component';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    LeafletModule.forRoot(),

  ],
  declarations: [
    ECommerceComponent,
    ProfitCardComponent,
    EarningCardComponent,
    NgxLeafletDemoComponent,
    EcommerceChartsComponent,
    VisitorsAnalyticsComponent,
    TrafficRevealComponent
  ],
  providers: [

  ],
})
export class ECommerceModule { }
