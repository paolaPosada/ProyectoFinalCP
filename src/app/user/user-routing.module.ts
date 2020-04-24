import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import {LayoutUsersComponent} from '../layout-users/layout-users.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {AdminGuard} from '../admin.guard';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'tienda',
        canActivate: [AdminGuard],
        component: LayoutUsersComponent,
        loadChildren: () =>
        import('../product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'carrito',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('../order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'contacto',
        canActivate: [AdminGuard],
        component: LayoutUsersComponent,
        loadChildren: () =>
        import('../contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
