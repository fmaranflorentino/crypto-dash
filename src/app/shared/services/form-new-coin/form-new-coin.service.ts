import { Injectable, ComponentRef } from '@angular/core';
import { DomService } from '../dom/dom.service';
import { FormNewCoinComponent } from 'src/app/dashboard/components/form-new-coin/form-new-coin.component';

@Injectable({
  providedIn: 'root'
})
export class FormNewCoinService {
  formNewCoin: ComponentRef<any>;

  constructor(
    private domService: DomService
  ) { }

  show(component) {
    this.formNewCoin = this.domService
      .appendComponentToBody<any>(component);
  }

  hide() {
    this.domService.destroyComponent(this.formNewCoin);
  }
}
