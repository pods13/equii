import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardViewComponent} from './views/dashboard-view.component';
import {TreeMapModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TreeMapModule
  ]
})
export class DashboardModule {
}
