import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ShrimpDetailsComponent } from './shrimp-details/shrimp-details.component';
import { ShrimpsComponent } from './shrimps/shrimps.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shrimps', component: ShrimpsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: '404', component: PagenotfoundComponent },
  { path: 'shrimps/shrimp-details', component: ShrimpDetailsComponent },
  //{ path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
