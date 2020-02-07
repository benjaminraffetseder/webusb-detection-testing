import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebusbSerivce } from './webusb/webusb.service';

import { AppComponent } from './app.component';
import { UsbDetectComponent } from './components/usb-detect/usb-detect.component';

@NgModule({
  declarations: [
    AppComponent,
    UsbDetectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WebusbSerivce
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
