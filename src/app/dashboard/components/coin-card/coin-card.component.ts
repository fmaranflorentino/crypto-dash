import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Coin } from 'src/app/shared/models/coin.interface';

import * as moment from 'moment';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent implements OnInit {
  @Input()
  coin: Coin;
  @Output()
  informCompareCoin: EventEmitter<any> = new EventEmitter();
  @Output()
  removeCoin: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  compareCoin(coin: Coin) {
    this.informCompareCoin.emit(coin);
  }

  getCoinaName(coin: string) {
    const name = coin.split('.');

    return this.translateName(name[0]);
  }

  translateName(name: string) {
    switch (name) {
      case 'BTC':
        return 'Bitcoin';
      case 'DOGE':
        return 'Dogecoin';
      case 'LTC':
        return 'Litecoin';
      case 'BCY':
        return 'BlockCypher';
      default:
        return 'Bitcoin';
    }
  }

   dateFormated(date: string) {
    return moment(date).format('DD/MM/YYYY HH:MM');
  }

  remove(coin: Coin) {
    this.removeCoin.emit(coin);
  }

}
