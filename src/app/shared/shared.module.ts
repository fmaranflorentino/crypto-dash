import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [HeaderComponent, BaseComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BaseComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
