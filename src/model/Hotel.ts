export class Hotel{
    hotel_id:number;
    name:string;
    rooms:number;
    address:string;
    constructor(h_id:number,name:string,address:string){
        this.hotel_id=h_id;
        this.name=name;
        this.address=address;
        this.rooms=50;
    }
    toString():string{
        return `hotel id: ${this.hotel_id} hotel name: ${this.name} total rooms: ${this.rooms} hotel address:${this.address}`;
    }
}