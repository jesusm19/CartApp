import { Component } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo';
import { CartComponent } from '../cart/cart';
import { ProductService } from '../../services/product';
import { Product } from '../../models/products';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart-app',
  imports: [CatalogoComponent, CartComponent],
  templateUrl: './cartApp.html',
})
export class CartAppComponent {

  listProducts: Product[] = [];

  listItems: CartItem[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.listProducts = this.productService.findAll();
  }

  onAddToCart(product: Product) {
    console.log('Product added to cart: ', product);
    if (this.listItems.some(item => item.product.id === product.id)) {
      this.listItems = this.listItems.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return;
    }
    this.listItems = [...this.listItems, { product: {...product}, quantity: 1 }];
  }

}
