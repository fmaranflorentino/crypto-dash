import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, BaseComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BaseComponent,
    HeaderComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
