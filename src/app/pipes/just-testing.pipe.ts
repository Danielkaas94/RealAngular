import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'justTesting'
})
export class JustTestingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
