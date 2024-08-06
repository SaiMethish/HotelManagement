import {hotelsList} from '../index'
import { Hotel } from '../model/Hotel';

export const getHotelsDetails=()=>{
    for(let i of hotelsList){
        console.log(i.toString());
    }
}

export const gethotel=(id:number):Hotel=>{
    for(let i of hotelsList){
        if(i.hotel_id==id){
            return i;
        }
    }
    return new Hotel(-1,"","");
}

export const addhotel=(hotel:Hotel)=>{
    hotelsList.push(hotel);
}

export const deletehotel=(id:number)=>{
    let rm_id:number=-1;
    for(let i of hotelsList){
        if(id==i.hotel_id){
            rm_id=id;
        }
    }
    id==-1?console.log("hotel not found"):hotelsList.splice(id,1);
}

export const updatehotel=(id:number,hotel:Hotel)=>{
    let tmp:Hotel=new Hotel(-1,"","");
    for(let i of hotelsList){
        if(i.hotel_id==id) tmp=i;
    }
    if(tmp.hotel_id==-1){
        console.log("hotel not found");
        return;
    }
    if(hotel.address!="") tmp.address=hotel.address;
    if(hotel.name!="") tmp.name=hotel.name;
    if(hotel.address!="") tmp.address=hotel.address;
}