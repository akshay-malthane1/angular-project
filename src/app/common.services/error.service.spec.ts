import { TestBed } from '@angular/core/testing';
import { ErrorService } from './error.service';

describe('ErrorService', () => {
  let service: ErrorService;
  let mockHttpClient;

  beforeEach(() => {
    service = new ErrorService(mockHttpClient);
  });

  it('should handel error', () => {

    spyOn(service, 'handleError');

    expect(service).toBeTruthy();
  });
});

