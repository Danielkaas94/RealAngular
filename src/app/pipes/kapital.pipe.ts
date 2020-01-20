import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kapital'
})
export class KapitalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
