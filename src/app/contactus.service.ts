import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from './contactus';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }
  contactus:Contactus[]=[
    {
       img:'https://www.shutterstock.com/shutterstock/photos/1892061808/display_1500/stock-vector-default-avatar-profile-icon-vector-social-media-user-image-1892061808.jpg',
      pid: 12298,
        pname: 'Daniel Klein',
        pemail: 'dklaien.1@gmail.com',
        pnum: 7845698761,
        
      },
      {
        img:'https://www.shutterstock.com/shutterstock/photos/1892061808/display_1500/stock-vector-default-avatar-profile-icon-vector-social-media-user-image-1892061808.jpg',
       pid: 12299,
         pname: 'Rebecca',
         pemail: 'rebecca.23@gmail.com',
         pnum: 9845698706,
         
       },
       {
        img:'https://www.shutterstock.com/shutterstock/photos/1892061808/display_1500/stock-vector-default-avatar-profile-icon-vector-social-media-user-image-1892061808.jpg',
       pid: 12300,
         pname: 'S.Deepu',
         pemail: 'sdeepu.23@gmail.com',
         pnum: 9845667706,
         
       },
       {
        img:'https://www.shutterstock.com/shutterstock/photos/1892061808/display_1500/stock-vector-default-avatar-profile-icon-vector-social-media-user-image-1892061808.jpg',
       pid: 12301,
         pname: 'Vineetha',
         pemail: 'y.vineetha.23@gmail.com',
         pnum: 6465698706,
         
       }
    ];
    public getcontactusDetails(): any {
      const contactusObservable = new Observable(observe => {
        setTimeout(() => {
          observe.next(this.contactus);
        }, 1000);
      });
      return contactusObservable;
    }
    
}
