import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modulo-dois',
  templateUrl: './modulo-dois.component.html',
  styleUrls: ['./modulo-dois.component.css']
})
export class ModuloDoisComponent implements OnInit {

  cursos: string[] = ["Curso1", "Curso2", "Mais Cursos"];
  cursosNull: string [] = [];
  bolinha: boolean = false;
  ativo: boolean = false;
  tamanhoFonte: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.bolinha = !this.bolinha;
  }

  mudarAtivo(){
    this.ativo = !this.ativo;
  }

}
