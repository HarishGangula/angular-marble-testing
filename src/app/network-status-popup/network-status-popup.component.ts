import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NetworkService } from '../network.service';

@Component({
  selector: 'app-network-status-popup',
  templateUrl: './network-status-popup.component.html',
  styleUrls: ['./network-status-popup.component.scss']
})
export class NetworkStatusPopupComponent implements OnInit {

  status: Observable<boolean>;
  constructor(private service: NetworkService) { }

  ngOnInit(): void {
    this.status = this.service.getStatus;
  }

}
