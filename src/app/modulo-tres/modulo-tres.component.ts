import { Component, OnInit } from '@angular/core';
import { ServiceUmService } from '../service/service-um.service';

@Component({
  selector: 'app-modulo-tres',
  templateUrl: './modulo-tres.component.html',
  styleUrls: ['./modulo-tres.component.css']
})
export class ModuloTresComponent implements OnInit {

  times: string[] = [];

  constructor(private _timesService: ServiceUmService) {

   }

  ngOnInit(): void {
    this.times = this._timesService.getTimes();
  }

}
