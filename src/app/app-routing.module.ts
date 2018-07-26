import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { Producto1Component } from './components/producto1/producto1.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'producto1', component: Producto1Component },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
