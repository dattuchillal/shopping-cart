import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from '../shared/payment/payment.component';
import { ShoppingCategoriesComponent } from './shopping-categories/shopping-categories.component';

const routes: Routes = [
  { path: "payment", component: PaymentComponent },
  { path: "", component: ShoppingCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ShoppingCartRoutingModule { }
