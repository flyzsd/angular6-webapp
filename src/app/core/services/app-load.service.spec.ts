import {TestBed, inject} from '@angular/core/testing';

import {AppLoadService} from './app-load.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppLoadService]
    });
  });

  it('should be created', inject([AppLoadService], (service: AppLoadService) => {
    expect(service).toBeTruthy();
  }));
});
