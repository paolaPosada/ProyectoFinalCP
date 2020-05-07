import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  public products: Array<Product>;
  public totalPrice = 0;
  public totalQuantity = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.currentDataCart$.subscribe(x => {
      if (x) {
        this.products = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.price * current.quantity), 0);
        console.log('x', x);
      }
    });
  }

  addProduct(product: Product) {
    this.cartService.changeCart(product);
  }

  deleteProduct(product: Product) {
    this.cartService.deleteCart(product);
  }

}
