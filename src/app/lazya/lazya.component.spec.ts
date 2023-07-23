import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyaComponent } from './lazya.component';

describe('LazyaComponent', () => {
  let component: LazyaComponent;
  let fixture: ComponentFixture<LazyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyaComponent]
    });
    fixture = TestBed.createComponent(LazyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
