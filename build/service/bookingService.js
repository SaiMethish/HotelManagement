"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBooking = exports.bookHotel = void 0;
const __1 = require("..");
const Booking_1 = require("../model/Booking");
const bookHotel = (user) => {
    const hotelname = prompt("enter the hotel name");
    const hotel = __1.hotelsList.find(i => i.name == hotelname);
    if (!hotel) {
        console.log("hotel not found");
        return;
    }
    let checkin_date = prompt("enter the checkin date");
    let checkout_date = prompt("enter the checkout date");
    if (checkin_date != undefined && checkout_date != undefined)
        (0, exports.addBooking)(user, hotel, checkin_date, checkout_date);
    else
        console.log("checkin/checkout date not valid");
};
exports.bookHotel = bookHotel;
const addBooking = (user, hotel, checkin_date, checkout_date) => {
    let booking_id;
    if (__1.bookingsList.length == 0) {
        booking_id = 1;
    }
    else {
        booking_id = __1.bookingsList.length + 1;
    }
    if (hotel.rooms <= 0) {
        console.log("rooms not avalilabe select another hotel");
        return;
    }
    const booking = new Booking_1.Booking(booking_id, user.user_id, hotel.hotel_id, checkin_date, checkout_date, new Date());
    __1.bookingsList.push(booking);
};
exports.addBooking = addBooking;
