import { Component } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo';
import { CartComponent } from '../cart/cart';
import { ProductService } from '../../services/product';
import { Product } from '../../models/products';
import { CartItem } from '../../models/cartItem';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { NavbarComponent } from "../shared/navbar/navbar";

@Component({
  selector: 'app-cart-app',
  imports: [CatalogoComponent, CartComponent, NavbarComponent],
  templateUrl: './cartApp.html',
})
export class CartAppComponent {

  listProducts: Product[] = [];
  listItems: CartItem[] = [];
  total: number = 0;
  showCart: boolean = false;


  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.listProducts = this.productService.findAll();
    this.listItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
    this.calculateTotal();
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
    this.saveItemsSessionStorage();
    this.calculateTotal();
  }

  onRemoveFromCart(idProduct: number) {
    this.listItems = this.listItems.filter(item => {
      return item.product.id !== idProduct;
    });

    this.saveItemsSessionStorage();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.listItems.reduce((total, item) => total + (item.quantity * item.product.price), 0);

  }

  saveItemsSessionStorage() {
    sessionStorage.setItem('cartItems', JSON.stringify(this.listItems));
  }

  openCart() {
    this.showCart = !this.showCart;
  }

}
