import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-users',
  templateUrl: './header-users.component.html',
  styleUrls: ['./header-users.component.css']
})
export class HeaderUsersComponent implements OnInit {

  total$: Observable<number>;

  constructor(private cartService: CartService
    ) {
      this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
     }

  ngOnInit() {
  }

}

