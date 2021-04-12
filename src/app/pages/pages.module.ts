import { NgModule } from '@angular/core';
import { NbMenuModule, NbOverlay } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { CreateContactComponent } from './create-contact/create-contact.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { CreateGraphComponent } from './create-graph/create-graph.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { UpdateGraphComponent } from './update-graph/update-graph.component'
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    DashboardModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PagesComponent,
    CreateContactComponent,
    CreateGraphComponent,
    UpdateContactComponent,
    UpdateGraphComponent
  ],
})
export class PagesModule {
}
