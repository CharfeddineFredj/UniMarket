import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFComponent } from './register-f.component';

describe('RegisterFComponent', () => {
  let component: RegisterFComponent;
  let fixture: ComponentFixture<RegisterFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
