import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-catalogo',
  imports: [ProductCardComponent],
  templateUrl: './catalogo.html',
})
export class CatalogoComponent {

  @Input({required: true}) listProducts!: Product[];

  @Output() productEventEmitter = new EventEmitter<Product>();

  onAddToCart(product: Product) {
    this.productEventEmitter.emit(product);
  }

}
