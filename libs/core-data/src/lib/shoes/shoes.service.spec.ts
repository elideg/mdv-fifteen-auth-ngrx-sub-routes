import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ShoeService } from './shoes.service';
import { Shoe } from './shoe';

describe('ShoeService', () => {
  let httpMock: HttpTestingController;
  let service: ShoeService;
  const mockServiceResponse: Shoe[] = [
    {
      id: "1",
      title: 'example title',
      details: 'example details',
      coolLevel: 150
    },
    {
      id: "2",
      title: 'example title',
      details: 'example details',
      coolLevel: 120
    }
  ]

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      ShoeService
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(ShoeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    service = TestBed.get(ShoeService);
    expect(service).toBeTruthy();
  });

  describe('#all', () => {
    it('should return an observable', (done) => {
      expect(service.all().subscribe(shoes => {
          expect(shoes).toEqual(mockServiceResponse);
          done();
      }))
        const req = httpMock.expectOne(service.getUrl());
        expect(req.request.method).toBe("GET");
        req.flush(mockServiceResponse);
        httpMock.verify();
    });
  });
});
