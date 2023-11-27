import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumaDiez'
})
export class SumaDiezPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value+args[0]-args[1];
  }

}
