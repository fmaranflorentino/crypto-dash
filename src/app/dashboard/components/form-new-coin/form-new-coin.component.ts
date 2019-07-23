import { Component, OnInit } from '@angular/core';

import { FormNewCoinService } from 'src/app/shared/services/form-new-coin/form-new-coin.service';
import { CoinsService } from 'src/app/shared/services/coins/coins.service';
import { CacheService } from 'src/app/shared/services/cache/cache.service';

@Component({
  selector: 'app-form-new-coin',
  templateUrl: './form-new-coin.component.html',
  styleUrls: ['./form-new-coin.component.scss']
})
export class FormNewCoinComponent implements OnInit {
  coinAvailable = [
    {
      label: 'Bitcoin',
      value: 'btc',
      chain: 'main'
    },
    {
      label: 'Dogecoin',
      value: 'doge',
      chain: 'main'
    },
    {
      label: 'Litecoin',
      value: 'ltc',
      chain: 'main'
    },
    {
      label: 'BlockCypher',
      value: 'bcy',
      chain: 'test'
    }
  ];

  constructor(
    private formNewCoin: FormNewCoinService,
    private coin$: CoinsService,
    private cacheService: CacheService
  ) { }

  async ngOnInit() {
    const t = await this.addNewCoinToList();

    const cache = localStorage.getItem('bosta');
    const stg = JSON.parse(cache);
    if (stg) {
      stg.push(t);
    }

    localStorage.setItem('bosta', JSON.stringify(stg));
  }

  removeFormNewCoin(): void {
    this.formNewCoin.hide();
  }

  addNewCoinToList() {
    return new Promise((resolve, reject) => {
      this.coin$
        .getSelectedCoin('doge', 'main')
        .subscribe(resp => resolve(resp));
    });
  }

}
