import { Injectable } from '@angular/core';
import { Aluno } from '../modulo-cinco/alunos/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  public alunos: Aluno[] = [
    {id: 1, nome:'Marcela', email:'marcela@gmail.com'},
    {id: 2, nome:'Igor', email:'igor@gmail.com'},
    {id: 3, nome:'Roberto', email:'roberto@gmail.com'}
  ]

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if ( aluno.id == id){
        return aluno;
      }
    }
  }

  constructor() { }
}
