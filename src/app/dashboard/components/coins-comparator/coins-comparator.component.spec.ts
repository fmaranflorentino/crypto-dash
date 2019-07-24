import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsComparatorComponent } from './coins-comparator.component';
import { DashboardModule } from '../../dashboard.module';
import { DebugElement } from '@angular/core';

describe('CoinsComparatorComponent', () => {
  let component: CoinsComparatorComponent;
  let fixture: ComponentFixture<CoinsComparatorComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoinsComparatorComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinsComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
