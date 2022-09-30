import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watch } from './watch';
@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor() { }
  watch:Watch[]=[
    {
    pid: 1,
      pname: 'Daniel Klein',
      pdescription: 'Women Charcoal Grey Analogue Watch DK.1.12260-2',
      price: 2100,
      img: 'https://th.bing.com/th?id=OPA.woyxAqxT6cBykw474C474&w=165&h=220&dpr=1.5&pid=21.1',
    },
    {
      pid: 2,
        pname: 'Fastrack',
        pdescription: 'Women Teal Blue Analogue Watch NL68006PP03_OR',
        price: 2200,
        img: 'https://th.bing.com/th?id=OPA.Na3OmGBhAQjuiw474C474&w=165&h=220&dpr=1.5&pid=21.1',
      },
      {
        pid: 3,
          pname: 'Titan',
          pdescription: 'Women Black Analogue Watch NK2481SL07',
          price: 1995,
          img: 'https://th.bing.com/th?id=OPA.XxMCN4z2pN8Mmg474C474&w=165&h=220&dpr=1.5&pid=21.1',
        },
        {
          pid: 4,
            pname: 'Fossil',
            pdescription: 'Women Blue Analogue Leather Watch',
            price: 6600,
            img: 'https://th.bing.com/th?id=OPA.AuL%2fY2Rjb4wCZA474C474&w=165&h=220&dpr=1.5&pid=21.1',
          },
          {
            pid: 5,
              pname: 'Titan',
              pdescription: 'Women Gold-Toned & Silver-Toned Analogue Watch',
              price: 1900,
              img: 'https://th.bing.com/th?id=OPA.XqWOOx97BJv9MA474C474&w=165&h=220&dpr=1.5&pid=21.1',
            }
  ];
  public getWatchDetails(): any {
    const watchObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.watch);
      }, 1000);
    });
    return watchObservable;
  }
  
}