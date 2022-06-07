import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'startupper',
})
export class StartUpper implements PipeTransform {
  transform(value: any) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
