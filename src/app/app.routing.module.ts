import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from "src/app/modulo-cinco/login/login.component";
//import { CursosComponent } from "src/app/modulo-cinco/cursos/cursos.component";
//import { AppModule } from "src/app/app.module";
import { HomeComponent } from "./modulo-cinco/home/home.component";
import { AlunosModule } from "./modulo-cinco/alunos/alunos.module";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./modulo-cinco/pagina-nao-encontrada/pagina-nao-encontrada.component";
//import { CursoNencontradoComponent } from "./modulo-cinco/cursos/curso-nencontrado/curso-nencontrado.component";
//import { CursoDetalheComponent } from "./modulo-cinco/cursos/curso-detalhe/curso-detalhe.component";

const appRoutes: Routes = [
  {path: 'cursos',
   loadChildren: () => import('./modulo-cinco/cursos/cursos.module').then(x => x.CursosModule),
   canActivate: [AuthGuard],
   canActivateChild:[CursosGuard],
   canLoad: [AuthGuard]
  },
  {path: 'alunos',
   loadChildren: () => import('./modulo-cinco/alunos/alunos.module').then(x => x.AlunosModule),
   canActivate: [AuthGuard],
   canLoad: [AuthGuard]
   //canActivateChild:[AlunosGuard]
  },
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  //{path: 'naoEncontrado', component: CursoNencontradoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
   canActivate: [AuthGuard]
  }
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

//export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(appRoutes);

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}