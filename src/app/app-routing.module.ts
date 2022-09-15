import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'fridge',component:RefrigeratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
