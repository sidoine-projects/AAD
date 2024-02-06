import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApropoComponent } from './apropo.component';

describe('ApropoComponent', () => {
  let component: ApropoComponent;
  let fixture: ComponentFixture<ApropoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApropoComponent]
    });
    fixture = TestBed.createComponent(ApropoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
