import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; 
import Swal from 'sweetalert2'
import { NavbarComponent } from "../shared/navbar/navbar";
import { SharingDataService } from '../../services/sharing-data';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart-app',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './cartApp.html',
})
export class CartAppComponent {

  listItems: CartItem[] = [];
  total: number = 0;
  private removeSubscription: any;
  private addSubscription: any;

  constructor(
    private SharingDataService: SharingDataService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.listItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
    this.calculateTotal();
    this.onRemoveFromCart();
    this.onAddToCart();
  }

  onAddToCart() {
    if (this.addSubscription) {
      this.addSubscription.unsubscribe();
    }
    this.addSubscription = this.SharingDataService.productEmitter.subscribe(product => {
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
      this.router.navigate(['/cart'], { state: { listItems: this.listItems, total: this.total } });

      Swal.fire({
        title: "Carrito de compras",
        text: "Producto agregado al carrito",
        icon: "success"
      });

    });
  }

  onRemoveFromCart() {
    if (this.removeSubscription) {
      this.removeSubscription.unsubscribe();
    }
    this.removeSubscription = this.SharingDataService.idProductEmiter.subscribe(idProduct => {
        Swal.fire({
          title: "Estás seguro?",
          text: "El producto será eliminado del carrito",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.listItems = this.listItems.filter(item => {
              return item.product.id !== idProduct;
            });

            this.saveItemsSessionStorage();
            this.calculateTotal();

            this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
              this.router.navigate(['/cart'], { state: { listItems: this.listItems, total: this.total } });
            });
            
            Swal.fire({
              title: "Eliminado!",
              text: "El producto ha sido eliminado del carrito.",
              icon: "success"
            });
          }
        });
      });
  }

  calculateTotal() {
    this.total = this.listItems.reduce((total, item) => total + (item.quantity * item.product.price), 0);

  }

  saveItemsSessionStorage() {
    sessionStorage.setItem('cartItems', JSON.stringify(this.listItems));
  }


}
