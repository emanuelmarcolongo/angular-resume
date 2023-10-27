import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase',
})
export class ToUpperCasePipe implements PipeTransform {
  transform(value: any): string {
    return value.toUpperCase();
  }
}
