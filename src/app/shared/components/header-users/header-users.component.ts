import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-users',
  templateUrl: './header-users.component.html',
  styleUrls: ['./header-users.component.css']
})
export class HeaderUsersComponent implements OnInit {

  total$: Observable<number>;

  constructor(private cartService: CartService, private auth: AuthService, private router: Router
  ) {
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['./home']);
      });

  }
}

