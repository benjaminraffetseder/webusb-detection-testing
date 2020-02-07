import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-usb-detect',
  templateUrl: './usb-detect.component.html',
  styleUrls: ['./usb-detect.component.css']
})

export class UsbDetectComponent implements OnInit {
  productName: string;
  productManufacturer: string;
  printerIsConnected: boolean = false;
  cashDeskIsConnected: boolean = false;
  connectedDevices;

  mockPrinter: string = "USB Printer";   // <- change these value to something you can connect with
  mockCashDesk: string = "USB Keyboard"; // <- you can find your connected devices here: chrome://device-log/

  constructor() {}

  addNewDevice(){
    navigator.usb.requestDevice({
      filters: []
    })
      .then(device => {
        console.log(device.productName);
        console.log(device.manufacturerName);
        this.productName = device.productName;
        this.productManufacturer = device.manufacturerName;
        if (this.productName === this.mockPrinter) {
          this.printerIsConnected = true;
        }
        if (this.productName === this.mockCashDesk) {
          this.cashDeskIsConnected = true;
        }
        navigator.usb.getDevices()
          .then(devices => {
            console.log("Total devices: " + devices.length);
            this.connectedDevices = devices.length;});
      })
  }

  ngOnInit() {
      navigator.usb.getDevices()
        .then(devices => {
            console.log("Total devices: " + devices.length);
            this.connectedDevices = devices.length;
            devices.forEach(device => {
              if (device.productName === this.mockPrinter) {
                this.printerIsConnected = true;
              }
              if (device.productName === this.mockCashDesk) {
                this.cashDeskIsConnected = true;
              } 
            });
        });
    }
}
