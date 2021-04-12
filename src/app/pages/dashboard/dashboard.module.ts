import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule, NbProgressBarModule,
  NbSelectModule, NbTabsetModule,
  NbUserModule
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard.component';
import { PlayerComponent } from './player/player.component';
import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  declarations: [DashboardComponent, StatusCardComponent, 
    PlayerComponent, ContactsComponent],
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
    NbProgressBarModule,

  ]
})
export class DashboardModule { }
