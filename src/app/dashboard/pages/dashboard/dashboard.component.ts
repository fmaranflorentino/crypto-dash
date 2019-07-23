import { Component, OnInit } from '@angular/core';

import { FormNewCoinService } from 'src/app/shared/services/form-new-coin/form-new-coin.service';
import { FormNewCoinComponent } from '../../components/form-new-coin/form-new-coin.component';
import { Coin } from 'src/app/shared/models/coin.interface';
import { CoinsService } from 'src/app/shared/services/coins/coins.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  coinList: Coin[] = [];
  defaultCoin: Coin;

  constructor(
    private formNewTaskService: FormNewCoinService,
    private coins$: CoinsService
  ) { }

  async ngOnInit() {
    const cache = localStorage.getItem('bosta');
    const stg = JSON.parse(cache);

    if (stg) {
      this.coinList = stg;
    } else {
      this.defaultCoin = await this.getDefaultCoin();

      this.handleDefaultCoin(this.defaultCoin);
    }

  }

  handleDefaultCoin(coin: Coin): void {
    this.coinList.push(coin);
    const data = this.coinList;
    const key = 'bosta';

    localStorage.setItem('bosta', JSON.stringify(data));

  }

  getDefaultCoin(): Promise<Coin> {
    return new Promise((resolve, reject) => {
      this.coins$
        .getDefaultCoin('btc', 'main')
        .subscribe(resp => resolve(resp));
    });
  }

  openFormNewCoinComponent(): void {
    this.formNewTaskService.show(FormNewCoinComponent);
  }

}
