import { Booking } from "./model/Booking";
import { Hotel } from "./model/Hotel";
import { User } from "./model/User";
import { bookHotel } from "./service/bookingService";
import { createUser } from "./service/userService";
export const hotelsList:Hotel[]=[];
export const bookingsList:Booking[]=[];
export const userList:User[]=[];
for(let i:number=1;i<=20;i++){
    let h:Hotel=new Hotel(i,`h${i}`,`address${i}`);
    hotelsList.push(h);
}
const user=createUser();
bookHotel(user);




