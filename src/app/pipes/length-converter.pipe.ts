import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthConverter'
})
export class LengthConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
