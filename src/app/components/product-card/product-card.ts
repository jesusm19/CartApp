import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'div[app-product-card]',
  imports: [],
  templateUrl: './product-card.html',
})
export class ProductCardComponent {

  @Input({required: true}) product!: Product;
  @Output() productEventEmitter = new EventEmitter<Product>();

  addCart(product: Product) {
    console.log('Adding to cart: ', product);
    this.productEventEmitter.emit(product);
  } 

}
