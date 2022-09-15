import { Component, OnInit } from '@angular/core';
//go to ts.config
import * as productdetails from "../data/products.json";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // fetch the data from products of json using alias productdetails in line number 4
  product:any=(productdetails as any).default;
 
}
