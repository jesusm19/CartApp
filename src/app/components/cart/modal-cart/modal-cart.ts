import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'app-modal-cart',
  imports: [CartComponent],
  templateUrl: './modal-cart.html',
  styles: ``,
})
export class ModalCartComponent {

  @Input({required: true}) listItems!: CartItem[];
  @Input({required: true}) total!: number;
  @Output() deleteEventEmmiter = new EventEmitter<number>();
  @Output() closeEventEmmiter = new EventEmitter<void>();


  onRemoveFromCart(idProduct: number) {
    this.deleteEventEmmiter.emit(idProduct);
  }

  openCart() {
    this.closeEventEmmiter.emit();
  }
}
