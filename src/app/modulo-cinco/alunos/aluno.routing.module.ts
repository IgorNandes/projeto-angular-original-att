import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";
import { AlunosGuard } from "src/app/guards/alunos.guard";
import { AlunosDeactivateGuard } from "src/app/guards/alunos-deactivate.guard";
import { AlunoDetalheResolver } from "./guards/aluno-detalhe.resolver";

const alunosRoutes: Routes = [
  {path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard],
  children : [
    {path: 'novo', component: AlunoFormComponent },
    {path: ':id', component: AlunoDetalheComponent,
      resolve: {aluno: AlunoDetalheResolver}
     },
    {path: ':id/editar', component: AlunoFormComponent,
      canDeactivate: [AlunosDeactivateGuard]
     }
  ]},
  
];

@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class AlunosRoutingModule {}