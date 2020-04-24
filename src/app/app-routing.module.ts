import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { LayoutUsersComponent} from './layout-users/layout-users.component';

import {AdminGuard} from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
        import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('./contact/contact.module').then(m => m.ContactModule)
      },
    ]
  },
  {
  path: '',
  component: LayoutUsersComponent,
  children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'order',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('./order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'home',
        canActivate: [AdminGuard],
        loadChildren: () =>
        import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
    import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
    import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () =>
    import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
