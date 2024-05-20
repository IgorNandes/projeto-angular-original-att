import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { CursosComponent } from "src/app/modulo-cinco/cursos/cursos.component";
import { CursoNencontradoComponent } from "./curso-nencontrado/curso-nencontrado.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";

const cursosRoutes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'naoEncontrado', component: CursoNencontradoComponent},
  {path: ':id', component: CursoDetalheComponent}
];

@NgModule({
    imports:[RouterModule.forChild(cursosRoutes)],
    exports:[RouterModule]
})
export class CursosRoutingModule {}