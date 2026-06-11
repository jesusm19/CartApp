import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/products';
import { ProductCardComponent } from '../product-card/product-card';
import { SharingDataService } from '../../services/sharing-data';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-catalogo',
  imports: [ProductCardComponent],
  templateUrl: './catalogo.html',
})
export class CatalogoComponent {

  listProducts!: Product[];

  constructor(
    private SharingDataService: SharingDataService,
    private ProductService: ProductService
  ) {
    
  }

  ngOnInit() {
    this.listProducts = this.ProductService.findAll();
    
  }

  onAddToCart(product: Product) {
    this.SharingDataService.productEmitter.emit(product);
  }

}
