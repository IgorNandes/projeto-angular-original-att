import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.lenght === 0 || args === undefined){
      return value;
    }
    console.log('Argumento:'+ args);
    console.log('Value:'+ value);

    let filter1 = args.toLowerCase();
    
    return value.filter(
      (a:any) => a.toLowerCase().indexOf(filter1) != -1
    );
  }

}
