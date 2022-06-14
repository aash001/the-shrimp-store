import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShrimpsComponent } from './shrimps/shrimps.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShippingComponent } from './shipping/shipping.component';
import { ShrimpDetailsComponent } from './shrimp-details/shrimp-details.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    HomeComponent,
    ProductsComponent,
    ShrimpsComponent,
    TutorialsComponent,
    AboutComponent,
    CartComponent,
    PagenotfoundComponent,
    ProductComponent,
    ProductDetailsComponent,
    ShippingComponent,
    ShrimpDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'shipping', component: ShippingComponent },
    ]),
    ImagekitioAngularModule.forRoot({
      publicKey: 'public_k9XRAy+88emWiSzu6gD/qJ1iruw=',
      urlEndpoint: 'https://ik.imagekit.io/oiinm7zlx',
      authenticationEndpoint: 'http://www.yourserver.com/auth',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
