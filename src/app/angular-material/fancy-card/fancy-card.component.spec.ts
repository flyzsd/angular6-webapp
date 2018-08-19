import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FancyCardComponent} from './fancy-card.component';
import {MatCardModule} from '@angular/material';

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
