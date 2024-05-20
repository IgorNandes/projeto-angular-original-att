import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';

import { ModuloUmComponent } from './modulo-um.component';

@NgModule({
  declarations: [
    ModuloUmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  exports: [
    ModuloUmComponent
  ]
})

export class ModuloUmModule { }
