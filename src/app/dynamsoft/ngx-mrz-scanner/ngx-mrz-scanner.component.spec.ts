import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMrzScannerComponent } from './ngx-mrz-scanner.component';

describe('NgxMrzScannerComponent', () => {
  let component: NgxMrzScannerComponent;
  let fixture: ComponentFixture<NgxMrzScannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMrzScannerComponent]
    });
    fixture = TestBed.createComponent(NgxMrzScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
