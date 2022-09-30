import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import the components for navigation/routing purpose
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RegisterComponent } from './register/register.component';
import { WatchComponent } from './watch/watch.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartItemsComponent } from './cart-items/cart-item.component';
import { LaptopdealsComponent} from './deals/laptopdeals/laptopdeals.component';

//Configure the routing path for the above imported components
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'refrigerator',component:RefrigeratorComponent},
  {path:'washmach',component:WashingmachineComponent},
  {path:'register',component:RegisterComponent},
  {path:'watch',component:WatchComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'login',component:LoginComponent},
 {path:'cartitem',component:CartItemsComponent},
 {path:'deals',component:LaptopdealsComponent}

 
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }