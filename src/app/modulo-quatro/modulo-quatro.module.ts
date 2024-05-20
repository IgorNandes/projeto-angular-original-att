import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CamelCasePipe } from '../pipes/camel-case.pipe';
import { FiltroPipe } from './../pipes/filtro.pipe';
import { ModuloQuatroComponent } from './modulo-quatro.component';



@NgModule({
  declarations: [ModuloQuatroComponent,CamelCasePipe,FiltroPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModuloQuatroComponent
  ]
})
export class ModuloQuatroModule { }
