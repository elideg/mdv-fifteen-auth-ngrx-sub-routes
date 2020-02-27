import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShoeService } from './shoes.service';
import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import {
  mockServiceResponse,
  mockServiceUri,
  mockUrlWithId,
  mockShoePayload,
  mockUpdatedShoePayload
} from './shoes.mock';

describe('Shoes Service', () => {
  let http: HttpTestingController;
  let service: ShoeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ShoeService
      ]
    })
  }));

  beforeEach(() => {
    service = TestBed.get(ShoeService);
    http = TestBed.get(HttpTestingController);
  });

  describe('#all', () => {
    it('should return an observable', (done) => {
        service.all().subscribe(shoes => {
          expect(shoes).toEqual(mockServiceResponse);
          done();
        });
        const req = http.expectOne(mockServiceUri);
        expect(req.request.method).toBe('GET');
        req.flush(mockServiceResponse);
        http.verify();
    });
  });

  describe('#create', () => {
    it('should create a shoe', (done) => {
      service.create(mockShoePayload).subscribe(shoe => {
        expect(shoe).toEqual(mockShoePayload);
        done();
      });
      const req = http.expectOne(mockServiceUri);
      expect(req.request.method).toBe('POST');
      req.flush(mockShoePayload);
      http.verify();
    });
  });

  describe('#delete', () => {
    it('should delete a shoe', (done) => {
      service.delete(mockShoePayload).subscribe(shoe => {
        expect(shoe).toEqual(mockShoePayload);
        done();
      })
      const req = http.expectOne(`${mockServiceUri}/3`);
      expect(req.request.method).toBe('DELETE');
      req.flush(mockShoePayload);
      http.verify();
    });
  });

  describe('#update', () => {
    it('should update a shoe', (done) => {
      service.update(mockUpdatedShoePayload).subscribe(shoe => {
        expect(shoe).toEqual(mockUpdatedShoePayload);
        done();
      })
      const req = http.expectOne(`${mockServiceUri}/3`);
      expect(req.request.method).toEqual('PUT');
      req.flush(mockUpdatedShoePayload);
      http.verify();
    });
  });


  describe('#getUrl', () => {
    it('should get Url', () => {
      expect(service.getUrl()).toEqual(mockServiceUri);
    });
  });

  describe('#getUrlForId', () => {
    it('should get a shoe by id', () => {
      expect(service.getUrlForId(1)).toEqual(mockUrlWithId);
    });
  });
});
