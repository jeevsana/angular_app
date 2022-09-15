import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { MicrowaveComponent } from './microwave/microwave.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { WashingmachinedealsComponent } from './washingmachinedeals/washingmachinedeals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    MicrowaveComponent,
    RefrigeratorComponent,
    WashingmachineComponent,
    WashingmachinedealsComponent
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
