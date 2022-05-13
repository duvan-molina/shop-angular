import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { WrapperComponent } from './modules/shared/components/wrapper/wrapper.component';
import { BannersComponent } from './modules/shared/components/banners/banners.component';
import { AllServices } from './services/all.service';
import { ProductCardComponent } from './modules/shared/components/product-card/product-card.component';
import { TestiomalCardComponent } from './modules/shared/components/testiomal-card/testiomal-card.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { ProductsComponent } from './modules/products/products.component';
import { CartComponent } from './modules/shared/components/cart/cart.component';
import { SliderComponent } from './modules/shared/components/slider/slider.component';
import { ThumbsComponent } from './modules/shared/components/thumbs/thumbs.component';
import { ReplacesPipe } from './pipes/replaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    WrapperComponent,
    BannersComponent,
    ProductCardComponent,
    TestiomalCardComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    SliderComponent,
    ThumbsComponent,
    ReplacesPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [AllServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
