import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product.model';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {
  transform(products: IProduct[], search: string): IProduct[] {
    if (search === '') {
      return products;
    }
    return products.filter(p =>
      p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
