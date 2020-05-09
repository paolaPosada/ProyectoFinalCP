import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/bitcoin.png',
      title: 'Bitcoin',
      price: 27251186.61,
      quantity: 1
    },
    {
      id: '2',
      image: 'assets/images/ethereum.png',
      title: 'Ethereum',
      price: 682652.4,
      quantity: 1
    },
    {
      id: '3',
      image: 'assets/images/zCash.png',
      title: 'ZCash',
      price: 179541.63,
      quantity: 1
    },
    {
      id: '4',
      image: 'assets/images/monero.png',
      title: 'Monero',
      price: 237739.83,
      quantity: 1
    },
    {
      id: '5',
      image: 'assets/images/litecoin.png',
      title: 'Litecoin',
      price: 161956.06,
      quantity: 1
    },
    {
      id: '6',
      image: 'assets/images/dash.png',
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
