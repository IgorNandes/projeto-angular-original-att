import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNencontradoComponent } from './curso-nencontrado.component';

describe('CursoNencontradoComponent', () => {
  let component: CursoNencontradoComponent;
  let fixture: ComponentFixture<CursoNencontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoNencontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoNencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
