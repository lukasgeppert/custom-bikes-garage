import { TestBed } from '@angular/core/testing';

import { BikesService } from './bikes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';

describe('BikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpErrorHandler],
    }))

  it('should be created', () => {
    const service: BikesService = TestBed.get(BikesService);
    expect(service).toBeTruthy();
  });
});
