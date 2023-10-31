import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform',
  standalone: true,
  pure: true,
})
export class DateTransformPipe implements PipeTransform {
  transform(value: Date = new Date()): unknown {
    const datePipe = new DatePipe('pt-BR');
    return datePipe.transform(value, 'dd/MM/yyyy');
  }
}
