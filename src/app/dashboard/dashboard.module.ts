import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { ButtonFavComponent } from './components/button-fav/button-fav.component';
import { FormNewCoinComponent } from './components/form-new-coin/form-new-coin.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { CoinCardComponent } from './components/coin-card/coin-card.component';

@NgModule({
  declarations: [DashboardComponent, ButtonFavComponent, FormNewCoinComponent, CoinListComponent, CoinCardComponent],
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
