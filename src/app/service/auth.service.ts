import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../modulo-cinco/login/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAuth: boolean = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAuth = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/'])
    }else{
      this.usuarioAuth = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAuth;
  }
}
