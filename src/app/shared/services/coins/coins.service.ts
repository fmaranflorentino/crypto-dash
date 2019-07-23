import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api/api.service';
import { Coin } from '../../models/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(
    private api$: ApiService
  ) { }

  getDefaultCoin(value, chain) {
    return this.getSelectedCoin(value, chain);
  }

  getSelectedCoin(value: string, chain: string): Observable<Coin> {
    const url = `${value}/${chain}`;
    

    return this.api$.get<Coin>(url);
  }
}
