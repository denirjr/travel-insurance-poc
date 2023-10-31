import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planSection',
  standalone: true,
  pure: true,
})
export class PlanSectionPipe implements PipeTransform {
  transform(plan: string | undefined): string {
    switch (plan) {
      case 'Você':
        return 'Individual';

      case 'Você e sua familia':
        return 'Familiar';

      case 'Outra pessoa':
        return 'Compartilhado';

      default:
        return '';
    }
  }
}
