import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from 'src/app/service/alunos.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

    constructor(private alunosService: AlunosService) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):  Observable<any> | Promise<any> | any {

        let id = route.params['id'];

        return this.alunosService.getAluno(id);
    }
}