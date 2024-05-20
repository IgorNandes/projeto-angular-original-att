import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-um',
  templateUrl: './modulo-um.component.html',
  styleUrls: ['./modulo-um.component.css']
})
export class ModuloUmComponent implements OnInit {

  nome: string ='igao';

  botaoClicar(){
    alert('Botão clicado');
    console.log();
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
  }

  constructor() { }

  ngOnInit(): void {    
  }

}
