import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './../material/material.module';
import { CartComponent } from './components/cart/cart.component';
import { HeaderUsersComponent } from './components/header-users/header-users.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    HeaderUsersComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    HeaderUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
