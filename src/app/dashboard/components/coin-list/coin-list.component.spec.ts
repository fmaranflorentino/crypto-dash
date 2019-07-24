import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListComponent } from './coin-list.component';
import { DebugElement } from '@angular/core';
import { DashboardModule } from '../../dashboard.module';

describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoinListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
