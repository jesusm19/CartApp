import { Injectable, Service } from '@angular/core';
import { products } from '../data/product.data';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    findAll() {
        return products;
    }
}
