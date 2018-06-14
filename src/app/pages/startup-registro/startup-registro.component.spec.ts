import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupRegistroComponent } from './startup-registro.component';

describe('StartupRegistroComponent', () => {
  let component: StartupRegistroComponent;
  let fixture: ComponentFixture<StartupRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
