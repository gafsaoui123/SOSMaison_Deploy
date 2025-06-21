// percent-change.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentChange'
})
export class PercentChangePipe implements PipeTransform {
  transform(value: number, extra: number = 5000): string {
    return (value * (extra / 100000)).toLocaleString('en-US', {
      maximumFractionDigits: 0
    });
  }
}