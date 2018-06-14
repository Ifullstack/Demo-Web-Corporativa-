import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadRegistroComponent } from './entidad-registro.component';

describe('EntidadRegistroComponent', () => {
  let component: EntidadRegistroComponent;
  let fixture: ComponentFixture<EntidadRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntidadRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntidadRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
