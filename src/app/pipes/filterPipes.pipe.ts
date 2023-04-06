import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//Criterio de busqueda por nombre de pokemon
  transform(data: Array<any>, searchTxt: string ): Array<Pokemon> {
    return data.filter(getData);
        function getData(value :any, index: any){
            if(value.name.toUpperCase().indexOf(searchTxt.toUpperCase()) > -1 ) {
                return data[index];
              }

        };
  };
}
