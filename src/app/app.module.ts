import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
