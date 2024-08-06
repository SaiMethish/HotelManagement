"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const Hotel_1 = require("../model/Hotel");
const getHotelsDetails = () => {
    for (let i of index_1.hotelsList) {
        console.log(i.toString());
    }
};
const gethotel = (id) => {
    for (let i of index_1.hotelsList) {
        if (i.hotel_id == id) {
            return i;
        }
    }
    return new Hotel_1.Hotel(-1, "", "");
};
const addhotel = (hotel) => {
    index_1.hotelsList.push(hotel);
};
const deletehotel = (id) => {
    let rm_id = -1;
    for (let i of index_1.hotelsList) {
        if (id == i.hotel_id) {
            rm_id = id;
        }
    }
    id == -1 ? console.log("hotel not found") : index_1.hotelsList.splice(id, 1);
};
const updatehotel = (id, hotel) => {
    let tmp = new Hotel_1.Hotel(-1, "", "");
    for (let i of index_1.hotelsList) {
        if (i.hotel_id == id)
            tmp = i;
    }
    if (tmp.hotel_id == -1) {
        console.log("hotel not found");
        return;
    }
    if (hotel.address != "")
        tmp.address = hotel.address;
    if (hotel.name != "")
        tmp.name = hotel.name;
    if (hotel.address != "")
        tmp.address = hotel.address;
};
