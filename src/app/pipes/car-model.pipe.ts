import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'model',
})
export class CarModelPipe implements PipeTransform {
  transform(value: string | undefined | null, args?: any): string {
    if (typeof value === 'string') {
      let words = value.split(' ');
      words.splice(1, 0, '|');
      return words.join(' ');
    }

    return 'Mark | Model';
  }
}
