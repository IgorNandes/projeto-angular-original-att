import { Injectable } from "@angular/core";
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AlunoFormComponent } from "../modulo-cinco/alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs";
import { IFormCanDeactivate } from "./iform-candeactivate";


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('guarda de desativação');

    return component.podeDesativar ? component.podeDesativar(): true;
  }
}