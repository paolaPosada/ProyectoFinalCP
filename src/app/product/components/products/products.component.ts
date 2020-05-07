import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
  // namep;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log('1');
    // console.log(this.namep);
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  /*infoUser() {
    console.log('2');
    this.namep = this.authService.infoUser();
    console.log(this.namep);
  }*/
}
