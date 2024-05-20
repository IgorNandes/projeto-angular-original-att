import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { AlunosService } from 'src/app/service/alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {

  aluno: any;
  inscricao: Subscription;
   formMudou: boolean = false;

  constructor(private route: ActivatedRoute,
    private alunosService: AlunosService    
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    )
  }

  OnInput(){
    this.formMudou = true;
    console.log('mudou');
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair?')
    }

    return true;
  }

}
