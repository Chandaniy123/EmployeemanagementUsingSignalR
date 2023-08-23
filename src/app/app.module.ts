import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componenents/navbar/navbar.component';
import { HomeComponent } from './Componenents/home/home.component';
import { AboutusComponent } from './Componenents/aboutus/aboutus.component';
import { PromosionComponent } from './Componenents/promosion/promosion.component';
import { VideoPromosionComponent } from './Componenents/video-promosion/video-promosion.component';
import { ProductComponent } from './Componenents/product/product.component';
import { FooterComponent } from './Componenents/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    PromosionComponent,
    VideoPromosionComponent,
    ProductComponent,
    FooterComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
