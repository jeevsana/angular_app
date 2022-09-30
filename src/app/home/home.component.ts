import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
   //TWO-WAY BINDING
   name=""
   //Style Binding using a function
  getColor() {
    return 'white';
  }
  //ngClass - created an instance for the class products
  prod:products=new products();
  //using an array we can access the properties and bind them to ngClass
  prod_array:string[]=['white','shadow'];
  //date property for PIPE demo
  date_today:string | undefined;
  price:number | undefined;

  ngOnInit(): void {
    //initialize the date in the oninit function
    this.date_today=new Date().toDateString();
    this.price=1000;

  }
}
//ngClass
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}
  