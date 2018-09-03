import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FancyCardComponent} from './fancy-card.component';
import {MatCardModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('FancyCardComponent', () => {
  let component: FancyCardComponent;
  let fixture: ComponentFixture<FancyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FancyCardComponent
      ],
      imports: [
        MatCardModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(FancyCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
