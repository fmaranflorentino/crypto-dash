import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewCoinComponent } from './form-new-coin.component';

describe('FormNewCoinComponent', () => {
  let component: FormNewCoinComponent;
  let fixture: ComponentFixture<FormNewCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewCoinComponent ]
    })
    .compileComponents();
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
