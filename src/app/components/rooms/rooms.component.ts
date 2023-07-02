import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName:string = 'Mazay'
  numberOfRooms:number = 10;
  hideRooms:boolean = false;

  rooms:Room={
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }
  toggle(){
    this.hideRooms = !this.hideRooms
  }
}
