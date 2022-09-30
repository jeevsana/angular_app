import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";

@Component({
  selector: 'app-laptopdeals',
  templateUrl: './laptopdeals.component.html',
  styleUrls: ['./laptopdeals.component.css']
})
export class LaptopdealsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}
