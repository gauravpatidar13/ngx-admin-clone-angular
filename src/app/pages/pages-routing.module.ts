import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { CreateGraphComponent } from './create-graph/create-graph.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { PagesComponent } from './pages.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { UpdateGraphComponent } from './update-graph/update-graph.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
   {
     path:'create-contact',
     component:CreateContactComponent
   },
   {
    path:'update-contact',
    component:UpdateContactComponent
  },
  {
    path:'update-graph',
    component:UpdateGraphComponent
  },
   {
    path:'create-graph',
    component:CreateGraphComponent
  },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
