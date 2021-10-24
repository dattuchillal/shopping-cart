import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCategoriesComponent } from './shopping-categories/shopping-categories.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ShoppingCategoriesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ShoppingCartRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ShoppingCartModule { }
