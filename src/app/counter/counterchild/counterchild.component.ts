import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
 @Input() counterValue: number=1;
  countLessThenOne=true;

  @Output() countEmmitter = new EventEmitter(); //4
  @Output() quantityEmitter= new EventEmitter();
  PostData(){
    this.countEmmitter.emit(this.counterValue);
    this.quantityEmitter.emit(this.counterValue);//4
  }

  decrement(){
    if(this.counterValue == 1)
    {
      this.countLessThenOne = false;
    }
    else{
      this.countLessThenOne = true;
      this.counterValue--;
    }
    this.PostData();
  }

  increment(){
    this.counterValue++;
    this.countLessThenOne=true;
    this.PostData();
  }


  constructor() { }

  ngOnInit(): void {
  }

}
