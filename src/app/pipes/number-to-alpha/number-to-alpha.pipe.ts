import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToAlpha'
})
export class NumberToAlphaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value+10).toString(36).toUpperCase();
  }

}
