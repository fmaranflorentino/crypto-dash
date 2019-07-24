import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { sharedComponents } from './helpers/shared-components';
import { applicationServices } from './helpers/app-services';


@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...sharedComponents,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    sharedComponents[2]
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...applicationServices
      ]
    };
  }
}
