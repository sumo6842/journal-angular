import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormGroupComponent } from './new-form-group.component';

describe('NewFormGroupComponent', () => {
  let component: NewFormGroupComponent;
  let fixture: ComponentFixture<NewFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
