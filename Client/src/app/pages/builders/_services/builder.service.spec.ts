import { TestBed } from '@angular/core/testing';

import { BuilderService } from './builder.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';

describe('BuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpErrorHandler],
    }))

  it('should be created', () => {
    const service: BuilderService = TestBed.get(BuilderService);
    expect(service).toBeTruthy();
  });
});
