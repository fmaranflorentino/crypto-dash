import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';

import { DomService } from './services/dom/dom.service';
import { ApiService } from './services/api/api.service';
import { ErrorService } from './services/error/error.service';
import { LoggerService } from './services/logger/logger.service';
import { CoinsService } from './services/coins/coins.service';
import { FormNewCoinService } from './services/form-new-coin/form-new-coin.service';
import { CacheService } from './services/cache/cache.service';

@NgModule({
  declarations: [HeaderComponent, BaseComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BaseComponent,
    HeaderComponent,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DomService,
        ApiService,
        ErrorService,
        LoggerService,
        CoinsService,
        FormNewCoinService,
        CacheService
      ]
    };
  }
}
