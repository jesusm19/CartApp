import { Component, Input } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { RouterModule } from '@angular/router';
import { Product } from '../../../models/products';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {

  @Input({required: true}) listItems!: CartItem[];

  @Input({required: true}) total: number = 0;

}
