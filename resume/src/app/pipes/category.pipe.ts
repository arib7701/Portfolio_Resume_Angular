import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(portfolios: any[], field: string, value: string): any[] {
    if (!portfolios) {
      return [];
    }

    return portfolios.filter(it => {
      return it[field].includes(value);
    });
  }
}
