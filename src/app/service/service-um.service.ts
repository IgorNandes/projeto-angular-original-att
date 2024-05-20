import { ServiceDoisService } from './service-dois.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ServiceUmService {

  estado: string[] = [];
  timesString: string[] = ['Vasco', 'Da', 'Gama'];

  constructor(private _estadoService: ServiceDoisService) {
    this.estado = this._estadoService.getEstado();
   }


  getTimes(){
    return this.estado.concat(this.timesString);
  }

}
