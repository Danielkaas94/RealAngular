import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valuta'
})
export class ValutaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
