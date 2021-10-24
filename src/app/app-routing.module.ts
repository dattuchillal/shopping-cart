import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './core/services/guard.service';
import { PaymentComponent } from './shared/payment/payment.component';

const routes: Routes = [
  { path: "shopping", loadChildren: () => import("./shopping-cart/shopping-cart.module").then(m => m.ShoppingCartModule) },
  { path: "payment", component: PaymentComponent, canActivate: [GuardService] },
  { path: "", pathMatch: "full", redirectTo: "/shopping" },  
  { path: "**", pathMatch: "full", redirectTo:"/shopping"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
