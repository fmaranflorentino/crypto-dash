import { Injectable, ComponentRef } from '@angular/core';
import { DomService } from '../dom/dom.service';
import { ComponentBehavior } from '../../helpers/component-behavior';

@Injectable({
  providedIn: 'root'
})
export class FormNewCoinService extends ComponentBehavior {
  formNewCoin: ComponentRef<any>;

  constructor(
    private domService: DomService
  ) {
    super();
  }

  show(component) {
    this.formNewCoin = this.domService
      .appendComponentToBody<any>(component);
  }

  hide() {
    this.domService.destroyComponent(this.formNewCoin);
  }
}
