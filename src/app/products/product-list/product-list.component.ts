import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'My product\'s list';
  readonly headers = {
    img: 'Image',
    desc: 'Product',
    price: 'Price',
    avail: 'Available',
    rat: 'Rating',
    stock: 'Stock'
  };
  showRatings = true;
  filterSearch = '';

  products: IProduct[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
        products => this.products = products
    );
  }

  toggleRating() {
    this.showRatings = !this.showRatings;
  }
}
