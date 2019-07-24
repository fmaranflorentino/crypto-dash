import { Component, OnInit } from '@angular/core';

import { FormNewCoinService } from 'src/app/shared/services/form-new-coin/form-new-coin.service';
import { CoinsService } from 'src/app/shared/services/coins/coins.service';
import { Coin } from 'src/app/shared/models/coin.interface';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { ApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-form-new-coin',
  templateUrl: './form-new-coin.component.html',
  styleUrls: ['./form-new-coin.component.scss']
})
export class FormNewCoinComponent implements OnInit {
  formCoin: FormGroup;
  coinAvailable = [
    {
      label: 'Bitcoin',
      value: 'btc',
      chain: 'main',
      name: 'BTC.main'
    },
    {
      label: 'Dogecoin',
      value: 'doge',
      chain: 'main',
      name: 'DOGE.main'
    },
    {
      label: 'Litecoin',
      value: 'ltc',
      chain: 'main',
      name: 'LTC.main'
    },
    {
      label: 'BlockCypher',
      value: 'bcy',
      chain: 'test',
      name: 'BCY.test'
    }
  ];

  constructor(
    private formNewCoin: FormNewCoinService,
    private coin$: CoinsService,
    private snackbarService: SnackbarService,
    private api$: ApiService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formCoin = new FormGroup({
      coin: new FormControl('', { validators: Validators.required })
    });
  }

  removeFormNewCoin(): void {
    this.formNewCoin.hide();
  }

  async handleNewCoin() {
    try {
      const isDuplicatedCoin = await this.addNewCoinToList();
      const cache = this.api$.getCache('coinList');

      if (isDuplicatedCoin) {
        if (cache) {
          cache.push(isDuplicatedCoin);
        }

      }

    } catch (error) {
      console.log('error hehe');
    }
  }

  addNewCoinToList(): Promise<Coin> {
    return new Promise(async (resolve, reject) => {

      const cache = this.api$.getCache('coinList');
      const hasDuplicate = cache.filter(c => c.name === this.formCoin.controls.coin.value);

      if (hasDuplicate.length > 0) {
        this.snackbarService.show('Atenção!', 'Essa moeda já esta selecionada.');
        reject();
      } else {
        await this.addNewCoin(cache);
        resolve();
      }

    });
  }

  addNewCoin(cache: Coin[]) {
    return new Promise(async (resolve, reject) => {
      const [coin] = this.coinAvailable.filter(cc => cc.name === this.formCoin.controls.coin.value);
      await this.coin$.getSelectedCoin(coin.value, coin.chain)
        .subscribe(resp => {
          const body = [...cache];
          body.push(resp);

          this.coin$.setCoinList(body);
          this.api$.cacheMe('coinList', body);
          this.snackbarService.show('Sucesso', 'Inclusão concluída com sucesso.');
          this.removeFormNewCoin();
          resolve();
        });
    });
  }

}
