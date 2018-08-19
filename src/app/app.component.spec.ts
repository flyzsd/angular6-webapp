import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatCardModule} from '@angular/material';

describe('AppComponent', () => {
  let fixture = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatCardModule,
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
    });
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular6-webapp'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular6-webapp');
  }));
  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular6-webapp!');
  }));
});
