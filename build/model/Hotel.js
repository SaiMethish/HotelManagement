"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(h_id, name, address) {
        this.hotel_id = h_id;
        this.name = name;
        this.address = address;
        this.rooms = 20;
    }
    toString() {
        return `hotel id: ${this.hotel_id} hotel name: ${this.name} total rooms: ${this.rooms} hotel address:${this.address}`;
    }
}
exports.Hotel = Hotel;
