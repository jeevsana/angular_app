import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";
import { Watch } from '../watch';
import { WatchService } from '../watch.service';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  watch:Watch[]=[];
  //constructor injection of the MicroovenService
  constructor(private watchservice:WatchService) { }

  ngOnInit(): void {
    const watchObservable= this.watchservice.getWatchDetails();
    watchObservable.subscribe((watchData: Watch[])=>{
      this.watch=watchData;
    });
  }
  all:any=(allprod as any).default;
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }

}
