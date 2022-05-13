import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaces'
})
export class ReplacesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const newValues = value.replace(/-/g, ' ').toLowerCase().split(' ');
    const newValue = newValues.map((item) => item[0].toUpperCase() + item.slice(1)).join(' ');
    return newValue;
  }

}
