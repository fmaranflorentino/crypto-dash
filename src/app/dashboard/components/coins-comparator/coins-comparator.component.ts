import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coin } from 'src/app/shared/models/coin.interface';

@Component({
  selector: 'app-coins-comparator',
  templateUrl: './coins-comparator.component.html',
  styleUrls: ['./coins-comparator.component.scss']
})
export class CoinsComparatorComponent implements OnInit {
  @Input()
  coinsComparator: Coin[];
  @Output()
  removeCoinFromComparator: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  gethightFee(first, second) {
    if (first > second) {
      return { green: true };
    } else if (first === second) {
      return { gray: true };
    } else {
      return { red: true };
    }
  }

  removeCoin(coin) {
    this.removeCoinFromComparator.emit(coin);
  }

}
