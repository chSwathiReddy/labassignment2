import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductnotfoundComponent } from './productnotfound/productnotfound.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
const routes: Routes = [
  { path : '', redirectTo: '/products', pathMatch: 'full'},
  { path : 'products', component: ProductComponent},
  { path : 'products/:id', component: ProductdetailsComponent },
  { path : 'categorys', component: CategoryComponent},
  { path : '**', component: ProductdetailsComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
