import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPanComponent } from './crear-pan.component';

describe('CrearPanComponent', () => {
  let component: CrearPanComponent;
  let fixture: ComponentFixture<CrearPanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
