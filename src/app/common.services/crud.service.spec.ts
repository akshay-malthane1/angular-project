import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CrudService]
    });
  });
  beforeEach(() => {
    service = TestBed.inject(CrudService);
    http = TestBed.inject(HttpTestingController);
  });
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
