import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasajeroComponent } from './list-pasajero.component';

describe('ListPasajeroComponent', () => {
  let component: ListPasajeroComponent;
  let fixture: ComponentFixture<ListPasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
