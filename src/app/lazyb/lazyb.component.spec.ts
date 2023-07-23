import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazybComponent } from './lazyb.component';

describe('LazybComponent', () => {
  let component: LazybComponent;
  let fixture: ComponentFixture<LazybComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazybComponent]
    });
    fixture = TestBed.createComponent(LazybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
