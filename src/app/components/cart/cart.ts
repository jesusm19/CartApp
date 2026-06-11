import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
})
export class CartComponent {

  listItems: CartItem[] = []; 

  

 total: number = 0;

  constructor(private  router: Router,
    private SharingDataService: SharingDataService
  ) {
    this.listItems = this.router.getCurrentNavigation()?.extras.state?.['listItems'] || [];
    this.total = this.router.getCurrentNavigation()?.extras.state?.['total'] || 0;

  }

  onRemoveFromCart(idProduct: number) {
    this.SharingDataService.idProductEmiter.emit(idProduct);
  }



}
