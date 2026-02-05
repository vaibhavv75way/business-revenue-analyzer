import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formattedCurrency',
})
export class FormattedCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: boolean[]): string {
    const [isProfit] = args;
    if(value >= 10000000){
      value /= 10000000;
      return isProfit ? ` ₹ ${value} Cr` : `${value} Cr` ;
    }else if(value >= 100000){
      value /= 100000;
      return isProfit ? ` ₹ ${value} L` : `${value} L` ;
    }else if(value >= 1000){
      value /= 1000
      return isProfit ? ` ₹ ${value} K` : `${value} K` ;
    }
    return isProfit ? ` ₹ ${value}` : `${value}` ;
  }

}
