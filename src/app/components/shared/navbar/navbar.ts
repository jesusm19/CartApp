import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class NavbarComponent {

  @Input({required: true}) listItems!: CartItem[];

  @Output() isOpenCartEventEmitter = new EventEmitter();

  openCart() {
    this.isOpenCartEventEmitter.emit();
  }


}
