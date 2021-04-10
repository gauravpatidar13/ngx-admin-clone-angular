import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { EarningCardComponent } from './earning-card/earning-card.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NgxLeafletDemoComponent} from './ngx-leaflet-demo/ngx-leaflet-demo.component';
import { EcommerceChartsComponent } from './ecommerce-charts/ecommerce-charts.component';
import { VisitorsAnalyticsComponent } from './visitors-analytics/visitors-analytics.component';
import { TrafficRevealComponent } from './traffic-reveal/traffic-reveal.component';
import { StoreModule } from '@ngrx/store';
import { getGraphReducer } from '../../store/reducers/graph.reducers';
import { EffectsModule } from '@ngrx/effects';
import { GraphEffects } from '../../store/effects/graph.effects';
import { getContactReducer } from '../../store/reducers/contacts.reducers';
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
