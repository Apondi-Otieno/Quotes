import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCreated'
})
export class DateCreatedPipe implements PipeTransform {

  transform(value: any): number
  {
    let today:Date = new Date();
    let todayWitNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
  }
  // //  ...args: unknown[]): unknown 
  // {
  //   return null;
  // }

}
