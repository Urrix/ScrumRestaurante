import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasReservaComponent } from './mesas-reserva.component';

describe('MesasReservaComponent', () => {
  let component: MesasReservaComponent;
  let fixture: ComponentFixture<MesasReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesasReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
