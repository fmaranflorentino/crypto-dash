import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsComparatorComponent } from './coins-comparator.component';

describe('CoinsComparatorComponent', () => {
  let component: CoinsComparatorComponent;
  let fixture: ComponentFixture<CoinsComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinsComparatorComponent ]
    })
    .compileComponents();
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
