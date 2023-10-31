import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includeLabel',
  standalone: true,
  pure: true,
})
export class IncludeLabelPipe implements PipeTransform {
  transform(value: boolean | undefined): string {
    return value === false ? 'Incluso' : 'Não incluso';
  }
}
