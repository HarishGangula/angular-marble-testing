import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NetworkStatusPopupComponent } from './network-status-popup/network-status-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NetworkStatusPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
