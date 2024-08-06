"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooking = exports.deleteBooking = exports.addBooking = exports.bookHotel = void 0;
const __1 = require("..");
const Booking_1 = require("../model/Booking");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
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
    for (let i of __1.hotelsList) {
        if (i.hotel_id == hotel.hotel_id)
            i.rooms--;
    }
    const booking = new Booking_1.Booking(booking_id, user.user_id, hotel.hotel_id, checkin_date, checkout_date, new Date());
    __1.bookingsList.push(booking);
};
exports.addBooking = addBooking;
const deleteBooking = (id) => {
    let idx = -1;
    for (let i = 0; i < __1.bookingsList.length; i++) {
        if (__1.bookingsList[i].booking_id == id)
            idx = i;
    }
    __1.bookingsList.splice(idx, 1);
};
exports.deleteBooking = deleteBooking;
const getBooking = (id) => {
    let booking;
    for (let i of __1.bookingsList) {
        if (i.booking_id == id)
            return i;
    }
    return new Booking_1.Booking(-1, -1, -1, "", "", new Date());
};
exports.getBooking = getBooking;
