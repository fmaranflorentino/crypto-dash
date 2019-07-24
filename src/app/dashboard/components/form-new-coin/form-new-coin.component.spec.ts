import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCoinComponent } from './form-new-coin.component';
import { DebugElement } from '@angular/core';
import { DashboardModule } from '../../dashboard.module';

describe('FormNewCoinComponent', () => {
  let component: FormNewCoinComponent;
  let fixture: ComponentFixture<FormNewCoinComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FormNewCoinComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
