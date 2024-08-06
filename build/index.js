"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelsList = void 0;
const Hotel_1 = require("./model/Hotel");
exports.hotelsList = [];
for (let i = 1; i <= 20; i++) {
    let h = new Hotel_1.Hotel(i, `h${i}`, `address${i}`);
    exports.hotelsList.push(h);
}
console.log(exports.hotelsList);
