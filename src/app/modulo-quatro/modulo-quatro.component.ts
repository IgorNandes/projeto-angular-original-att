import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-quatro',
  templateUrl: './modulo-quatro.component.html',
  styleUrls: ['./modulo-quatro.component.css']
})
export class ModuloQuatroComponent implements OnInit {

  time: any = {
    nome: 'vasco da gama',
    data: new Date(1898, 8, 21),
    cidade: 'rio de janeiro'
  }

  caixaFiltro: any;

  times: any = ['Vasco','Flamengo','Fluminense','Botafogo'];

  constructor() { }

  ngOnInit(): void {
  }

  FiltroCorreto(){
    if(this.times.lenght === 0 || this.caixaFiltro === undefined || this.caixaFiltro.trim() === ''){
      return this.times;
    }
    return this.times.filter((a:any) => {
      if(a.toLowerCase().indexOf(this.caixaFiltro.toLowerCase()) >= 0)
      {
         return true;
      }
      return false;
      
    });
}

}
