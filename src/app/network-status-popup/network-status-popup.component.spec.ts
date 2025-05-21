import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NetworkService } from '../network.service';
import { NetworkStatusPopupComponent } from './network-status-popup.component';
import { TestScheduler } from 'rxjs/testing';

describe('NetworkStatusPopupComponent (Angular 17+)', () => {
  let fixture: ComponentFixture<NetworkStatusPopupComponent>;
  let component: NetworkStatusPopupComponent;
  let testScheduler: TestScheduler;
  let mockNetworkService: any;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    mockNetworkService = {
      getStatus: () => testScheduler.createColdObservable('---x|', { x: false })
    };

    TestBed.configureTestingModule({
      declarations: [NetworkStatusPopupComponent],
      providers: [{ provide: NetworkService, useValue: mockNetworkService }]
    });

    fixture = TestBed.createComponent(NetworkStatusPopupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "You are offline" when status is false', () => {
    testScheduler.run(({ cold, flush }) => {
      mockNetworkService.getStatus = cold('---x|', { x: false });
      fixture.detectChanges(); // triggers AsyncPipe
      flush();   // resolves cold observable
      fixture.detectChanges(); // update DOM

      const text = fixture.nativeElement.querySelector('p').textContent;
      expect(text).toContain('You are offline');
    });
  });
});
