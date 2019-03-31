import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {
  transform(products: Product[], search: string): Product[] {
    if (search === '') {
      return products;
    }
    return products.filter(p =>
      p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
