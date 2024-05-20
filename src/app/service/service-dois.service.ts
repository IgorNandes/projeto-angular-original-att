import { Injectable } from '@angular/core';

@Injectable()
export class ServiceDoisService {

  constructor() { }

  getEstado(){
    return ['Rio De Janeiro'];
  }
}
