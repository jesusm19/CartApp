import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
})
export class CartComponent {

  @Input({required: true}) listItems: CartItem[] = []; 

}
