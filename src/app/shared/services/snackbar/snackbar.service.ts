import { Injectable, ComponentRef } from '@angular/core';
import { DomService } from '../dom/dom.service';

import { ComponentBehavior } from '../../helpers/component-behavior';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService extends ComponentBehavior {
  snack: ComponentRef<any>;

  constructor(
    private domService: DomService
  ) {
    super();
  }

  show(title, message) {
    this.snack = this.domService.appendComponentToBody<any>(SnackbarComponent);
    this.snack.instance.title = title;
    this.snack.instance.message = message;

    setTimeout(() => {
      this.hide();
    }, 1500);
  }

  hide() {
    this.domService.destroyComponent(this.snack);
  }
}
