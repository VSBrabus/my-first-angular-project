import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product-page/product/product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsResolver } from './resolvers/products.resolver';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductPageComponent,
    ProductComponent,
    InfoComponent
    // ShoppingCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProductsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
