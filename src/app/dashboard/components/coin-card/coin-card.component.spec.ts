import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCardComponent } from './coin-card.component';
import { DebugElement } from '@angular/core';
import { DashboardModule } from '../../dashboard.module';

describe('CoinCardComponent', () => {
  let component: CoinCardComponent;
  let fixture: ComponentFixture<CoinCardComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoinCardComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
