import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SearchComponent } from '../search/search.component';
import { UserService } from '../user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService: UserService, private cartSvc:CartService) {}
   auth:boolean=false;
   cartcount:number=0;
  title = 'FLIPKART';
  //PROPERTY BINDING
  public logo="data:image/jpeg;base64,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";
  //EVENT BINDING
  onSearch()
  {
    alert("Will contact shortly");
  }

  //Accessing the Search Component
  productentered: string=' '  

  //Event
  search_product(product_name:string):void{ 
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name;
    console.log(product_name)
  }

  ngOnInit(): void {
    this.authService.authSubject.subscribe( 
      data=>{
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartcount=response.length;
        console.log(this.cartcount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartcount=response;
        console.log(this.cartcount);
       }
     )

  }
}
