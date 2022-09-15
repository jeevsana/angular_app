import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachinedealsComponent } from './washingmachinedeals.component';

describe('WashingmachinedealsComponent', () => {
  let component: WashingmachinedealsComponent;
  let fixture: ComponentFixture<WashingmachinedealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingmachinedealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingmachinedealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
