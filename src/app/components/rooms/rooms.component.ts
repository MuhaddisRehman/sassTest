import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

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
  roomList:RoomList[]=[
    {
      roomNumber:1,
      roomType:'Deluxe Room',
      amenities:'Air Conditioner, Free Wifi, Bathroom, Kitchen',
      price:1000,
      photos:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      checkinTime:new Date('11-NOV-2023'),
      checkoutTime:new Date('12-NOV-2023'),
      rating:4.5
    },
    {
      roomNumber:2,
      roomType:'Deluxe Room',
      amenities:'Air Conditioner, Bathroom, Kitchen',
      price:500,
      photos:"https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      checkinTime:new Date('11-NOV-2023'),
      checkoutTime:new Date('12-NOV-2023'),
      rating:4.6
    },
    {
      roomNumber:3,
      roomType:'Deluxe Room',
      amenities:'Bathroom, Kitchen',
      price:200,
      photos:"https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      checkinTime:new Date('11-DEC-2023'),
      checkoutTime:new Date('12-NOV-2023'),
      rating:4.9
    }
]
selectRoom(room:RoomList){
  console.log("🚀 ~ file: rooms.component.ts:52 ~ RoomsComponent ~ selectRoom ~ room:", room)
  
}
  toggle(){
    this.hideRooms = !this.hideRooms
  }
}
