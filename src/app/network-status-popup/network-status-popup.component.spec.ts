import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { NetworkService } from '../network.service';
import { NetworkStatusPopupComponent } from './network-status-popup.component';

describe('NetworkStatusPopupComponent', () => {
  let component: NetworkStatusPopupComponent;
  let fixture: ComponentFixture<NetworkStatusPopupComponent>;
  let networkService: any

  beforeEach(async () => {
    networkService = jasmine.createSpy('NetworkService');
    networkService.getStatus = cold('---x|', { x: false });
    await TestBed.configureTestingModule({
      declarations: [ NetworkStatusPopupComponent ],
      providers: [{ provide: NetworkService, useValue: networkService }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "You are offline" text when offline', () => {
    getTestScheduler().flush();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('You are offline')
  });
});
