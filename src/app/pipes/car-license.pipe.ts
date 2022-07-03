import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'license',
})
export class CarLicensePipe implements PipeTransform {
  transform(value: string, args?: any): string {
    return (
      value.slice(0, 2) + ' ' + value.slice(2, 6) + ' ' + value.slice(6, 8)
    );
  }
}
