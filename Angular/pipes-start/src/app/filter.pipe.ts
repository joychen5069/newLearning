import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0) {
      return value;
    }
    const resulteArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resulteArray.push(item)
      }
    }
    return resulteArray
  }

}
