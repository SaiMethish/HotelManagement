import { Booking } from "./model/Booking";
import { Hotel } from "./model/Hotel";
import { getUser } from "./service/userService";
export const hotelsList:Hotel[]=[];
export const bookingsList:Booking[]=[];
for(let i:number=1;i<=20;i++){
    let h:Hotel=new Hotel(i,`h${i}`,`address${i}`);
    hotelsList.push(h);
}
getUser();
console.log(hotelsList);




