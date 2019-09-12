import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { DishComponent } from './dish/dish.component';
import { ButtonComponent } from './button/button.component';
import { OrderComponent } from './order/order.component';
import { PopOrderComponent } from './pop-order/pop-order.component';
import { SearchPipe } from './search.pipe';
import { SearchComponent } from './search/search.component';
import { ReadyComponent } from './ready/ready.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PopularComponent,
    DishComponent,
    ButtonComponent,
    OrderComponent,
    PopOrderComponent,
    SearchPipe,
    SearchComponent,
    ReadyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
