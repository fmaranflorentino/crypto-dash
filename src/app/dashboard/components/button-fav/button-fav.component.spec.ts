import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFavComponent } from './button-fav.component';
import { DebugElement } from '@angular/core';
import { DashboardModule } from '../../dashboard.module';

describe('ButtonFavComponent', () => {
  let component: ButtonFavComponent;
  let fixture: ComponentFixture<ButtonFavComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ButtonFavComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
