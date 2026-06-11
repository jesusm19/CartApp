import { EventEmitter, Injectable, Service } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

    private _idProductEmiter: EventEmitter<number> = new EventEmitter<number>();

    private _productEventEmitter = new EventEmitter<Product>();
    
    get idProductEmiter() {
        return this._idProductEmiter;
    }

    get productEmitter() {
        return this._productEventEmitter;
    }

}
