import { TestBed } from '@angular/core/testing';

import { AppHttpInterceptorService } from './app-http-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
  }));

  it('should be created', () => {
    const service: AppHttpInterceptorService = TestBed.get(AppHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
