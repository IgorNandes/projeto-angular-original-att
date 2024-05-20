import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloQuatroComponent } from './modulo-quatro.component';

describe('ModuloQuatroComponent', () => {
  let component: ModuloQuatroComponent;
  let fixture: ComponentFixture<ModuloQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloQuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
