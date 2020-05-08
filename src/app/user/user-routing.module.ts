import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutUsersComponent} from '../layout-users/layout-users.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
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
      },
      {
        path: 'contacto',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('../contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'perfil',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('../profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
