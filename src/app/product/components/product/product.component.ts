import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Product } from '../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private cartService: CartService) {
    }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
  }

}
