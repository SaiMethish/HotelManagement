"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
class Booking {
    constructor(b_id, u_id, h_id, checkin_date, checkout_date, booking_date) {
        this.booking_id = b_id;
        this.hotel_id = h_id;
        this.user_id = u_id;
        this.booking_date = booking_date;
        this.checkin_date = checkin_date;
        this.checkout_date = checkout_date;
    }
}
exports.Booking = Booking;
