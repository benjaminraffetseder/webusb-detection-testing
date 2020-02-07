import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsbDetectComponent } from './usb-detect.component';

describe('UsbDetectComponent', () => {
  let component: UsbDetectComponent;
  let fixture: ComponentFixture<UsbDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsbDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsbDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
