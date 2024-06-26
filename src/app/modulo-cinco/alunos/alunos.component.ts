import { Component, OnInit } from '@angular/core';
import { AlunosService } from 'src/app/service/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos: any [] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
