import { Component, OnInit, AfterViewInit } from '@angular/core';

import { FormNewCoinService } from 'src/app/shared/services/form-new-coin/form-new-coin.service';
import { FormNewCoinComponent } from '../../components/form-new-coin/form-new-coin.component';
import { Coin } from 'src/app/shared/models/coin.interface';
import { CoinsService } from 'src/app/shared/services/coins/coins.service';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';
import { ApiService } from 'src/app/shared/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  coinList: Coin[] = [];
  defaultCoin: Coin;
  coinsComparator: Coin[] = [];
  coinListSub: Subscription;

  constructor(
    private formNewTaskService: FormNewCoinService,
    private coins$: CoinsService,
    private snackbarService: SnackbarService,
    private api$: ApiService
  ) {
    this.getCoinsList();
  }

  ngOnInit() {

  }

  async ngAfterViewInit() {

    try {
      await this.getCoinsList();
    } catch (error) {
      console.log(error);
    }

  }

  getCoinsList() {
    return new Promise<any>(async (resolve, reject) => {
      await this.coins$.setInitialState();

      this.coinListSub = this.coins$.getCoinList()
        .subscribe(
          async resp => {
            this.coinList = resp;
            if (resp.length === 0) {
              await this.setDefaultCoinList();
            }
            resolve();
          },

          error => {
            reject(error);
          }
        );

    });

  }

  async setDefaultCoinList() {
    const list = await this.getDefaultCoin();
    this.coinList = new Array(list);

    this.api$.cacheMe('coinList', this.coinList);
  }

  getDefaultCoin(): Promise<Coin> {
    return new Promise((resolve, reject) => {
      this.coins$
        .getDefaultCoin('btc', 'main')
        .subscribe(resp => {
          resolve(resp);
        });
    });
  }


  handleCompareCoin(coin: Coin) {
    if (this.coinsComparator.length > 0) {
      const duplicate = this.coinsComparator.filter(c => c.name === coin.name);

      if (duplicate.length > 0) {
        this.showErrorMessage();
      } else {
        this.coinsComparator.push(coin);
      }

    } else {
      this.coinsComparator.push(coin);
    }
  }

  handleRemoveCoin(coin: Coin, type?: string) {
    if (type) {
      this.coinsComparator = this.coinsComparator.filter(c => c !== coin);
    } else {
      this.coinList = this.coinList.filter(c => c !== coin);

      this.api$.cacheMe('coinList', this.coinList);
    }
  }

  openFormNewCoinComponent(): void {
    this.formNewTaskService.show(FormNewCoinComponent);
  }

  showErrorMessage() {
    this.snackbarService.show('Atenção!', 'Remova uma moeda para adicionar outra a comparação.');
  }

}
