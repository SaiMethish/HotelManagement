import { bookingsList, hotelsList } from "..";
import { Booking } from "../model/Booking";
import { Hotel } from "../model/Hotel";
import { User } from "../model/User";
import{gethotel} from "../service/hotelService"
export const bookHotel=(user:User)=>{
    const hotelname=prompt("enter the hotel name");
    const hotel=hotelsList.find(i=>i.name==hotelname);
    if(!hotel) {
        console.log("hotel not found");
        return;
    }
    let checkin_date=prompt("enter the checkin date");
    let checkout_date=prompt("enter the checkout date");
    if(checkin_date!=undefined && checkout_date!=undefined)addBooking(user,hotel,checkin_date,checkout_date);
    else console.log("checkin/checkout date not valid");
}

export const addBooking=(user:User,hotel:Hotel,checkin_date:string,checkout_date:string)=>{
    let booking_id:number;
    if(bookingsList.length==0){
        booking_id=1;
    }
    else{
        booking_id=bookingsList.length+1;
    }
    if(hotel.rooms<=0){
        console.log("rooms not avalilabe select another hotel");
        return;
    }
    for(let i of hotelsList){
        if(i.hotel_id==hotel.hotel_id) i.rooms--;
    }
    const booking=new Booking(booking_id,user.user_id,hotel.hotel_id,checkin_date,checkout_date,new Date());
    bookingsList.push(booking);
}
export const deleteBooking=(id:number)=>{
    let idx:number=-1;
    for(let i=0;i<bookingsList.length;i++){
        if(bookingsList[i].booking_id==id) idx=i;
    }
    bookingsList.splice(idx,1);
}

export const getBooking=(id:number)=>{
    let booking:Booking;
    for(let i of bookingsList){
        if(i.booking_id==id) return i;
    }
    return new Booking(-1,-1,-1,"","",new Date());
}