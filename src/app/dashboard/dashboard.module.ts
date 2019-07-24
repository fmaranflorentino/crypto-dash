import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import {
  ButtonFavComponent,
  FormNewCoinComponent,
  CoinListComponent,
  CoinCardComponent,
  CoinsComparatorComponent
} from './components/';


@NgModule({
  declarations: [
    DashboardComponent,
    ButtonFavComponent,
    FormNewCoinComponent,
    CoinListComponent,
    CoinCardComponent,
    CoinsComparatorComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule.forRoot()
  ],
  entryComponents: [
    FormNewCoinComponent
  ]
})
export class DashboardModule { }
