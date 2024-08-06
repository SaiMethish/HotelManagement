"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsList = exports.hotelsList = void 0;
const Hotel_1 = require("./model/Hotel");
const bookingService_1 = require("./service/bookingService");
const userService_1 = require("./service/userService");
exports.hotelsList = [];
exports.bookingsList = [];
for (let i = 1; i <= 20; i++) {
    let h = new Hotel_1.Hotel(i, `h${i}`, `address${i}`);
    exports.hotelsList.push(h);
}
const user = (0, userService_1.getUser)();
(0, bookingService_1.bookHotel)(user);
