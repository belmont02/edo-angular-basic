import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from './product-list/product-item/star-rating/star-rating.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    StarRatingComponent,
    ProductsFilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    FormsModule
  ]
})
export class ProductsModule {}
