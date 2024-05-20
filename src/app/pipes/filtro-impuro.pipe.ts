import { Pipe, PipeTransform } from '@angular/core';

import { FiltroPipe } from './filtro.pipe';

@Pipe({
  name: 'filtroImpuro',
  pure: false
})
export class FiltroImpuroPipe extends FiltroPipe {

}
