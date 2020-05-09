import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<Product[]>([]);
  public currentDataCart$ = this.cart.asObservable();
  cart$ = this.cart.asObservable();

  constructor() { }

  deleteCart(product: Product) {
    const listCart = this.cart.getValue();
    const objIndex = listCart.findIndex((obj => obj.id === product.id));
    if (objIndex !== -1) {
      listCart[objIndex].quantity = 1;
      listCart.splice(objIndex, 1);
    }
    this.cart.next(listCart);
  }

  public changeCart(product: Product) {
    let listCart = this.cart.getValue();
    if (listCart) {
      const objIndex = listCart.findIndex((obj => obj.id === product.id));
      if (objIndex !== -1) {
        listCart[objIndex].quantity += 1;
      } else {
        listCart.push(product);
      }
    } else {
      listCart = [];
      listCart.push(product);
    }
    this.cart.next(listCart);
  }
}






