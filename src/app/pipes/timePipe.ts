import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
     transform(value: any): any {
         let totalTime
        let hours = Math.floor(value / 60);
        let minutes =  value - (hours * 60);
        if (hours == 0) {
            totalTime = `${minutes} min.`;
        }else if (minutes == 0) {
            totalTime = `${hours} hrs.`;
        }else{
            totalTime = `${hours} hrs. ${minutes} min.`;
        }
        return totalTime;
      }
 }