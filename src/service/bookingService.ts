import { bookingsList, hotelsList } from "..";
import { Booking } from "../model/Booking";
import { Hotel } from "../model/Hotel";
import { User } from "../model/User";
import{gethotel} from "../service/hotelService"
export const bookHotel=(user)=>{
    const hotelname=prompt("enter the hotel name");
    const hotel=hotelsList.find(i=>i.name==hotelname);
    if(!hotel) {
        console.log("hotel not found");
        return;
    }
    let checkin_date=prompt("enter the checkin date");
    let checkout_date=prompt("enter the checkout date");
    addBooking(user,hotel,checkin_date,checkout_date);
}

export const addBooking=(user:User,hotel:Hotel,checkin_date,checkout_date){
    let booking_id:number;
    if(bookingsList.length==0){
        booking_id=1;
    }
    else{
        booking_id=bookingsList.length+1;
    }
    const booking=new Booking(booking_id,user.user_id,hotel.hotel_id,checkin_date,checkout_date,new Date());
    bookingsList.push(booking);
}