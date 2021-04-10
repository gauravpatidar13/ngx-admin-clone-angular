import { NgModule } from '@angular/core';
import { NbMenuModule, NbOverlay } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    DashboardModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
