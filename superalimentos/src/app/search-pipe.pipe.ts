import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(array: any[], name: string): any[] {
    return array.filter(i => {
      if (i.name.toLowerCase().includes(name.toLowerCase())) {
        return i;
      }
    });
  }

}
