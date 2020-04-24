import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [ProductFormComponent, NavComponent,  TableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
