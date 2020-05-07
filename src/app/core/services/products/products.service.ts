import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 /* constructor( private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }*/
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Bitcoin',
      price: 27251186.61,
      quantity: 1
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Ethereum',
      price: 682652.4,
      quantity: 1
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'ZCash',
      price: 179541.63,
      quantity: 1
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Monero',
      price: 237739.83,
      quantity: 1
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Litecoin',
      price: 161956.06,
      quantity: 1
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Dash',
      price: 328188.95,
      quantity: 1
    }
  ];
  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
