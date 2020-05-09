import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutUsersComponent} from '../layout-users/layout-users.component';
import {AdminGuard} from '../admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutUsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'tienda',
        pathMatch: 'full',
      },
      {
        path: 'tienda',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('../product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'carrito',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('../order/order.module').then(m => m.OrderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
