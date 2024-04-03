import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaMeseroComponent } from './entrega-mesero.component';

describe('EntregaMeseroComponent', () => {
  let component: EntregaMeseroComponent;
  let fixture: ComponentFixture<EntregaMeseroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaMeseroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregaMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
