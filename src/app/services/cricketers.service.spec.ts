import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CricketerService } from 'app/services/cricketer.service';
import {
  BaseRequestOptions, Http, XHRBackend, HttpModule,
  Response, ResponseOptions, RequestMethod
} from '@angular/http';
import { ICricketList } from 'app/interface/cricketer-list';

describe('CricketerService', () => {
  let mockBackend: MockBackend;

  // All heed this block - it is required so that the test injector
  // is properly set up. Without doing this, you won't get the
  // fake backend injected into Http.

  // Also, you need to inject MockBackend as a provider before you wire
  // it to replace XHRBackend with the provide function!  So this is all
  // extremely important to set up right.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CricketerService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));


  it('should get cricketerList', (done) => {
    let cricketerService: CricketerService;

    getTestBed().compileComponents().then(() => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: [
                {
                  'firstName': 'Sugata',
                  'lastName': 'Maji',
                  'favShot': 'Drive',
                  'playerType': 'Batsman',
                  'yearlyIncome': '500000',
                  'dob': '1984-07-20'
                },
                {
                  'firstName': 'Rakesh',
                  'lastName': 'Maji',
                  'favShot': 'Pull',
                  'playerType': 'Batsman',
                  'yearlyIncome': '6500000',
                  'dob': '1991-08-19'
                }
              ]
            }
            )));
        });

      cricketerService = getTestBed().get(CricketerService);
      expect(cricketerService).toBeDefined();

      cricketerService.getCricketerList().subscribe((cricketerList: ICricketList[]) => {
        expect(cricketerList.length).toBeDefined();
        expect(cricketerList.length).toEqual(2);
        expect(cricketerList.length).not.toBe(1);
        done();
      });
    });
  });


 
});
