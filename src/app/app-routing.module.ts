import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'products-by-category', component:ProductByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
