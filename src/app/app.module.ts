import { PaginaNaoEncontradaModule } from './modulo-cinco/pagina-nao-encontrada/pagina-nao-encontrada.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModuloUmModule } from './modulo-um/modulo-um.module';
import { ModuloDoisModule } from './modulo-dois/modulo-dois.module';
import { ModuleTresModule } from './modulo-tres/modulo-tres.module';
import { ModuloQuatroModule } from './modulo-quatro/modulo-quatro.module';
import { DiretivaUmDirective } from './diretivas/diretiva-um.directive';
import { DiretivadoisDirective } from './diretivas/diretiva-dois.directive';
import { FiltroImpuroPipe } from './pipes/filtro-impuro.pipe';
//import { CursosModule } from './modulo-cinco/cursos/cursos.module';
import { HomeModule } from './modulo-cinco/home/home.module';
import { LoginModule } from './modulo-cinco/login/login.module';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './service/auth.service';
import { ServiceUmService } from './service/service-um.service';
import { ServiceDoisService } from './service/service-dois.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './modulo-cinco/pagina-nao-encontrada/pagina-nao-encontrada.component';

//import { AlunosModule } from './modulo-cinco/alunos/alunos.module';



@NgModule({
  declarations: [
    AppComponent,
    FiltroImpuroPipe
  ],
  imports: [
    BrowserModule,
    ModuloUmModule,
    ModuloDoisModule,
    ModuleTresModule,
    ModuloQuatroModule,
    //CursosModule,
    HomeModule,
    LoginModule,
    FormsModule,
    PaginaNaoEncontradaModule,
    //routing,
    //AlunosModule,
    AppRoutingModule,
    TooltipModule.forRoot()
  ],
  providers: [ServiceUmService,
    ServiceDoisService,
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
