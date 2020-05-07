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
    // Buscamos el item del carrito para eliminar
    const objIndex = listCart.findIndex((obj => obj.id === product.id));
    if (objIndex !== -1) {
      // Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia,
      // si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].quantity = 1;
      // Eliminamos el item del array del carrito
      listCart.splice(objIndex, 1);
    }
    this.cart.next(listCart);
  }

  public changeCart(product: Product) {
    // Obtenemos el valor actual
    let listCart = this.cart.getValue();
    console.log('Value del carrito', this.cart.getValue());

    // Si no es el primer item del carrito
    if (listCart) {
      // Buscamos si ya cargamos ese item en el carrito
      const objIndex = listCart.findIndex((obj => obj.id === product.id));
      // Si ya cargamos uno aumentamos su cantidad
      if (objIndex !== -1) {
        listCart[objIndex].quantity += 1;
      } else {
        listCart.push(product);
      }
    } else {
      listCart = [];
      listCart.push(product);
    }
    console.log('Value del carrito despues dee add', this.cart.next(listCart));
    this.cart.next(listCart); // Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }
}






