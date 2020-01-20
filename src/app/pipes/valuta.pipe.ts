import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valuta'
})
export class ValutaPipe implements PipeTransform {

  kurs: number = 751;
  transform(værdi: any, args?: any, valutaType:string = " €"): any {

    if (true) {
      // Euro
      // Man har i denne eksempel 81€, kursen på euro er 751, kursen på danske kroner er 100.
      console.log(værdi);
      return (værdi * this.kurs) / 100 + valutaType;
    }
  }
}
