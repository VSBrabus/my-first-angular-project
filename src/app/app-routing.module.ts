import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



const routes: Routes = [
  { path: '', redirectTo: '/product-page', pathMatch: 'full'},
  { path: 'product-page', component: ProductPageComponent },
  // { path: 'shopping-cart', component: ShoppingCartComponent },
  
  // Lazy loaded module for shopping-cart
  { path: 'shopping-cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  // Redirect to product-page by default
  { path: '', redirectTo: 'product-page', pathMatch: 'full' },
  // Redirect to product-page for any other unknown paths
  { path: '**', redirectTo: 'product-page' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
