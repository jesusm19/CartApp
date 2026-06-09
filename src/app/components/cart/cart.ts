import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
})
export class CartComponent {

  @Input({required: true}) listItems: CartItem[] = []; 

  @Output() idPrductEmiter = new EventEmitter<number>();

  @Input({required: true}) total: number = 0;

  onRemoveFromCart(idProduct: number) {
    this.idPrductEmiter.emit(idProduct);
  }



}
