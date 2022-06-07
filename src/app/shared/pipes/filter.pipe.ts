import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, place: string, patterName: string) {
    if (value.length === 0 || place === '') {
      return value;
    }
    const Array = [];
    for (const item of value) {
      if (item[patterName] === place) {
        Array.push(item);
      }
    }
    return Array;
  }
}
