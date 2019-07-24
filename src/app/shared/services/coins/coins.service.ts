import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Coin } from '../../models/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private coinList = [];
  private coinListUptodate: Subject<any> = new Subject();

  constructor(
    private api$: ApiService
  ) {
    this.setInitialState();
  }

  async setInitialState() {
    return new Promise(async (resolve, reject) => {
      const cache = JSON.parse(localStorage.getItem('coinList'));

      if (cache) {
        this.coinList = cache;
        await this.coinListUptodate.next(this.coinList);
        resolve();
      } else {
        this.coinList = [];
        await this.coinListUptodate.next(this.coinList);
        resolve();
      }
    });

  }

  getDefaultCoin(value, chain) {
    return this.getSelectedCoin(value, chain);
  }

  getSelectedCoin(value: string, chain: string): Observable<Coin> {
    const url = `${value}/${chain}`;

    return this.api$.get<Coin>(url);
  }

  getCoinList(): Observable<any> {
    return this.coinListUptodate.asObservable();
  }

  setCoinList(coinList) {
    this.coinListUptodate.next(coinList);
  }
}
