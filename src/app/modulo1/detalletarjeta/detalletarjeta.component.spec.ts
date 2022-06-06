import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalletarjetaComponent } from './detalletarjeta.component';

describe('DetalletarjetaComponent', () => {
  let component: DetalletarjetaComponent;
  let fixture: ComponentFixture<DetalletarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalletarjetaComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
