import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMrzReaderComponent } from './ngx-mrz-reader.component';

describe('NgxMrzReaderComponent', () => {
  let component: NgxMrzReaderComponent;
  let fixture: ComponentFixture<NgxMrzReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMrzReaderComponent]
    });
    fixture = TestBed.createComponent(NgxMrzReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
