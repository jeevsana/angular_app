import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopdealsComponent } from './laptopdeals.component';

describe('LaptopdealsComponent', () => {
  let component: LaptopdealsComponent;
  let fixture: ComponentFixture<LaptopdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});