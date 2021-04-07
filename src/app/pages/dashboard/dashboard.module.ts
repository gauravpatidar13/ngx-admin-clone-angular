import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

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
import { NgxEchartsModule } from 'ngx-echarts';
import { StatusCardComponent } from './status-card/status-card.component';
import { PlayerComponent } from './player/player.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [DashboardComponent, StatusCardComponent, PlayerComponent, ContactsComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NgxEchartsModule,
    NbProgressBarModule
  ]
})
export class DashboardModule { }
