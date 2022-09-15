import { Component, OnInit } from '@angular/core';
import * as refrigerator from '../data/refrigerator.json';

@Component({
  selector: 'app-refrigerator',
  templateUrl: './refrigerator.component.html',
  styleUrls: ['./refrigerator.component.css']
})
export class RefrigeratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 fridge:any=(refrigerator as any).default;
//property or toggle effect
 productDetail=false;
 //events to perform the toggle effect
 showproductDetailsToggle()
 {
  this.productDetail=!this.productDetail;
 }
 //function to toggle between the span content from + to - and vice versa
 //and bin dthe fucntion to [ngclass]
toggleContent(){
  var content='';
  if(this.productDetail){
    content='fa fa-plus'
  }
  else{
    content='fa fa-minus'
  }
  return content;
}

}
