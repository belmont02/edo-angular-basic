import { ProductsFilterPipe } from './../../pipes/products-filter.pipe';
import { IProduct } from '../../models/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [ProductsFilterPipe]
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct;
  @Input() showRating: boolean;

  productImage: string;
  constructor(private productService: ProductService) { }

  ngOnInit() { }

  changeRating(rating: number): void {
    this.product.rating = rating;
    this.productService.updateRating(this.product).subscribe();
  }
}
