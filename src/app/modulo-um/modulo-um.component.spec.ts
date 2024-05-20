import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloUmComponent } from './modulo-um.component';

describe('ModuloUmComponent', () => {
  let component: ModuloUmComponent;
  let fixture: ComponentFixture<ModuloUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloUmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
