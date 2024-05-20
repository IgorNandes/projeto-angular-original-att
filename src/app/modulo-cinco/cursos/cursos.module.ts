import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos.component';
import { CursosService } from 'src/app/service/cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNencontradoComponent } from './curso-nencontrado/curso-nencontrado.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNencontradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ],
  exports: [
  ],
  providers: [CursosService]
})
export class CursosModule { }
