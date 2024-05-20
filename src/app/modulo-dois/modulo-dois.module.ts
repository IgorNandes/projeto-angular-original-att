import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap/alert';
import { ModuloDoisComponent } from './modulo-dois.component';
import { FormsModule } from '@angular/forms';
import { DiretivaUmDirective } from '../diretivas/diretiva-um.directive';
import { DiretivadoisDirective } from '../diretivas/diretiva-dois.directive';

@NgModule({
  declarations: [
    ModuloDoisComponent,
    DiretivaUmDirective,
    DiretivadoisDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  exports: [
    ModuloDoisComponent
  ]
})
export class ModuloDoisModule { }
