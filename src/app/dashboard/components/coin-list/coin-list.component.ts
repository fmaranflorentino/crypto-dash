import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Coin } from 'src/app/shared/models/coin.interface';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  @Input()
  coinList: Coin[];
  @Output()
  informCompareCoin: EventEmitter<any> = new EventEmitter();
  @Output()
  removeCoin: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleCompareCoin(coin: Coin) {
    this.informCompareCoin.emit(coin);
  }

  handleRemoveCoin(coin: Coin) {
    this.removeCoin.emit(coin);
  }

}
