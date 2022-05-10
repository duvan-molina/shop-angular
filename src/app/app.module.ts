import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { WrapperComponent } from './modules/shared/components/wrapper/wrapper.component';
import { BannersComponent } from './modules/shared/components/banners/banners.component';
import { AllServices } from './services/all.service';
import { ProductCardComponent } from './modules/shared/components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    WrapperComponent,
    BannersComponent,
    ProductCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTING],
  providers: [AllServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
